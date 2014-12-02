__author__ = 'chrisshroba'

from gevent import monkey
monkey.patch_all()

from flask import *

from flask_socketio import SocketIO


app = Flask(__name__, static_folder=".", static_path="")

app.debug = True

socketio = SocketIO()

app.config["SECRET_KEY"] = "secret!"

@app.route("/")
def root():
    socketio.emit("foo",{"a":"A"})
    return "root!"

@socketio.on('messagee')
def handle_message(messagee):
    print('received messagee: ' + messagee)
    socketio.emit("foo",{"b":"B"})


socketio.run(app,port=5000, host="0.0.0.0")