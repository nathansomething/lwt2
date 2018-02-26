from flask import Flask, jsonify, url_for, redirect, request
from flask_pymongo import PyMongo
from flask_restful import Api, Resource

app = Flask(__name__)
app.config["MONGO_DBNAME"] = "words_db"
mongo = PyMongo(app, config_prefix='MONGO')
APP_URL = "http://127.0.0.1:5000"

class Documents(Resource):

    def get(Resource):
        data = []
        cursor = mongo.db.documents.find({}, {"_id": 0, "update_time": 0})
        for document in cursor:
            print(document)
            data.append(document)
        return jsonify({"response":data})

    def post(Resource):
        data = request.get_json()
        if not data:
            return jsonify({"response":"ERROR"})
        else:
            print(data)
            name = data['name']
            language = data['language']
            words = data['words']
            mongo.db.documents.insert({"name":name,"language":language,"words":words})

class Words(Resource):
    def get(self):
        data = []
        cursor = mongo.db.words.find({}, {"_id": 0, "update_time": 0})
        for word in cursor:
            print(word)
            data.append(word)
        return jsonify({"response": data})

    def post(self):
        data = request.get_json()
        if not data:
            data = {"response": "ERROR"}
            return jsonify(data)
        else:
            text = data['text']
            language = data['language']
            familiarity = "UNKNOWN"
            mongo.db.words.insert({"text":text,"language":language,"familiarity":familiarity})
            return jsonify({'response': "SUCCESS"})

    # def put(self, registration):
    #     data = request.get_json()
    #     mongo.db.student.update({'registration': registration}, {'$set': data})
    #     return redirect(url_for("students"))
    #
    # def delete(self, registration):
    #     mongo.db.student.remove({'registration': registration})
    #     return redirect(url_for("students"))


class Index(Resource):
    def get(self):
        return redirect(url_for("words"))


api = Api(app)
api.add_resource(Index, "/", endpoint="index")
api.add_resource(Words, "/words", endpoint="words")
api.add_resource(Documents, "/documents", endpoint="documents")
# api.add_resource(Student, "/api/<string:registration>", endpoint="registration")
# api.add_resource(Student, "/api/department/<string:department>", endpoint="department")

if __name__ == "__main__":
    app.run(debug=True)
