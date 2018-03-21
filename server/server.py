from flask import Flask, jsonify, url_for, redirect, request
from flask_pymongo import PyMongo
from flask_restful import Api, Resource, abort
from flask_cors import CORS
from bson import ObjectId

app = Flask(__name__)
CORS(app)
app.config["MONGO_DBNAME"] = "lwt2"
mongo = PyMongo(app, config_prefix='MONGO')
#APP_URL = "http://127.0.0.1:5000"

class Documents(Resource):

    def get(self, document_id=None):
        document_data = []
        if not document_id:
            cursor = mongo.db.documents.find({})
            for document in cursor:
                document["documentId"] = str(document.pop("_id"))
                document_data.append(document)
        else:
            document_data = mongo.db.documents.find_one({"_id":ObjectId(document_id)})
            document_data["documentId"] = str(document_data.pop("_id"))

        return jsonify(document_data)

    def post(self):
        data = request.get_json()
        if not data:
            abort(204, message="No Data")
        else:
            mongo.db.documents.insert({
                "name": data['name'],
                "language": data['language'],
                "wordDisplays": data['wordDisplays'],
                "numberOfWords": data['numberOfWords'],
                "uniqueWordIds": data['uniqueWordIds'],
                "createdOn": data['createdOn']
            })
            return jsonify({"response": "SUCCESS"})

    def delete(self, document_id=None):
        if document_id:
            mongo.db.documents.remove_one({"_id":document_id})
        else:
            mongo.db.documents.remove({})
        return jsonify({"response":"SUCCESS"})

class Words(Resource):

    def get(self, word_ids=None):
        word_data = []
        cursor = None
        if word_ids:
            if not "," in word_ids:
                cursor = mongo.db.words.find({'_id': ObjectId(word_ids)})
            else:
                word_ids = word_ids.split(',')
                word_object_ids = []
                for word_id in word_ids:
                    word_object_ids.append(ObjectId(word_id))
                cursor = mongo.db.words.find({'_id': {'$in': word_object_ids}})
        else:
            cursor = mongo.db.words.find({})
        for word in cursor:
            word["wordId"] = str(word.pop('_id'))
            word_data.append(word)
        return jsonify(word_data)

    def post(self):
        words = request.get_json()
        if not words:
            abort(204, message="No Data")
        word_displays = []
        for word in words:
            word_text = word['text'].capitalize()
            check_word = mongo.db.words.find_one({"text":word_text,"language":word['language']})
            if not check_word:
                check_word = mongo.db.words.insert_one({"text":word_text,"language":word['language'],"translation":word['translation'],"familiarity":1,"isPunctuation":word['isPunctuation']})
                word_displays.append({"wordId": str(check_word.inserted_id), "displayText": word['text']})
            else:
                word_displays.append({"wordId": str(check_word['_id']), "displayText": word['text']})
        return jsonify(word_displays)

    def put(self):
        word_to_update = request.get_json()
        if not word_to_update:
            abort(204, message="No Data")
        mongo.db.words.update({"_id": ObjectId(word_to_update['wordId'])}, {"text":word_to_update['text'],"language":word_to_update['language'],"translation":word_to_update['translation'],"familiarity":word_to_update['familiarity'],"isPunctuation":word_to_update['isPunctuation']})
        return jsonify({"response":"SUCCSESS"})

    def delete(self):
        mongo.db.words.remove({})
        return jsonify({"response":"SUCCSESS"})

api = Api(app)
api.add_resource(Words, "/words", endpoint="all_words")
api.add_resource(Words, "/words/<string:word_ids>", endpoint="select_words")
api.add_resource(Documents, "/documents", endpoint="documents")
api.add_resource(Documents, "/documents/<string:document_id>", endpoint="get_document")

if __name__ == "__main__":
    app.run(debug=True)
