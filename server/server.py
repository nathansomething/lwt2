from flask import Flask, jsonify, url_for, redirect, request
from flask_pymongo import PyMongo
from flask_restful import Api, Resource, abort
from flask_cors import CORS
from bson import ObjectId

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
                document["documentId"] = str(document.pop("_id"))
                document_data.append(document)
        else:
            document_data = mongo.db.documents.find_one({"name":"Testing"})
            document_data["documentId"] = str(document_data.pop("_id"))

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
            words_in_document = data['words']
            for word in words_in_document:
                lookup_word = mongo.db.words.find_one({"text":word['text'],"language":word['language']})
                if (lookup_word):
                    word_ids.append(str(lookup_word["_id"]))
                else:
                    word_id = mongo.db.words.insert({"text":word['text'],"language":word['language'],"translation":word['translation'],"isPunctuation":word['isPunctuation']})
                    word_ids.append(str(word_id))

            mongo.db.documents.insert({
                "name":name,
                "language":language,
                "createdOn":created_on,
                "words": word_ids
            })
            return jsonify({"response": "SUCCESS"})

    def delete(Resource, document_id=None):
        if document_id:
            mongo.db.documents.remove_one({"_id":document_id})
        else:
            print('about to remove all documents')
            mongo.db.documents.remove({})
        return jsonify({"response":"SUCCESS"})

class Words(Resource):

    def get(self, word_ids=None):
        word_data = []
        cursor = None
        if word_ids:
            word_ids = word_ids.split('|')
            word_object_ids = []
            for word_id in word_ids:
                word_object_ids.append(ObjectId(word_id))
            cursor = mongo.db.words.find({'_id': {'$in': word_object_ids}})
        else:
            cursor = mongo.db.words.find({})
        for word in cursor:
            word["wordId"] = str(word.pop("_id"))
            word_data.append(word)
        print(word_data)
        return jsonify(word_data)

    def delete(self):
        mongo.db.words.remove({})
        return jsonify({"response":"SUCCSESS"})

class Index(Resource):
    def get(self):
        return redirect(url_for("words"))

api = Api(app)
api.add_resource(Index, "/", endpoint="index")
api.add_resource(Words, "/words/", endpoint="all_words")
api.add_resource(Words, "/words/<string:word_ids>", endpoint="select_words")
api.add_resource(Documents, "/documents", endpoint="documents")
api.add_resource(Documents, "/documents/<string:document_id>", endpoint="get_document")

if __name__ == "__main__":
    app.run(debug=True)
