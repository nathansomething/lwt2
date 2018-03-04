from flask import Flask, jsonify, url_for, redirect, request
from flask_pymongo import PyMongo
from flask_restful import Api, Resource, abort
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config["MONGO_DBNAME"] = "words_db"
mongo = PyMongo(app, config_prefix='MONGO')
APP_URL = "http://127.0.0.1:5000"

class Documents(Resource):

    def get(Resource, document_id=None):
        document_data = []
        if not document_id:
            cursor = mongo.db.documents.find({})
            for document in cursor:
                document["document_id"] = str(document.pop("_id"))
                document_data.append(document)
        else:
            document_data = mongo.db.documents.find_one({"_id":document_id})

        return jsonify(document_data)

    def post(Resource):
        data = request.get_json()
        if not data:
            abort(204, message="No Data")
        else:
            word_ids = []
            name = data['name']
            language = data['language']
            created_on = data['createdOn']
            words = data['words']
            for word in words:
                word_id = mongo.db.words.find({"text":word['text'],"language":word['language']})
                if (word_id):
                    word_ids.append(word_id)
                else:
                    word_id = mongo.db.words.insert({"text":word['text'],"language":word['language'],"translation":word['translation'],"isPunctuation":word['isPunctuation']})
                    word_ids.append(word_id)

            mongo.db.documents.insert({
                "name":name,
                "language":language,
                "createdOn":created_on,
                "words": []
            })
            return jsonify({"response": "SUCCESS"})

    def delete(Resource, document_id=None):
        if document_id:
            mongo.db.documents.remove_one({"_id":document_id})
        else:
            print('about to remove all documents')
            mongo.db.documents.remove({},{"_id": 0, "update_time": 0})
        return jsonify({"response":"SUCCESS"})

class Words(Resource):
    def get(self):
        word_data = []
        cursor = mongo.db.words.find({}, {"_id": 0, "update_time": 0})
        for word in cursor:
            word_data.append(word)
        return jsonify(word_data)

class Index(Resource):
    def get(self):
        return redirect(url_for("words"))

api = Api(app)
api.add_resource(Index, "/", endpoint="index")
api.add_resource(Words, "/words", endpoint="words")
api.add_resource(Documents, "/documents", endpoint="documents")
api.add_resource(Documents, "/documents/<int:document_id>", endpoint="get_document")

if __name__ == "__main__":
    app.run(debug=True)
