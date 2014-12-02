__author__ = 'chrisshroba'
import sleekxmpp

username="chris.shroba@chat.facebook.com"
password='nyrknaqenvfgurfjrrgrfg!!'.encode("rot13")

server = ("chat.facebook.com",5222)

chatbot = sleekxmpp.ClientXMPP(username,password)

def message(msg):
    print msg
    msg.reply("Test").send()




chatbot.add_event_handler('message', message)

chatbot.connect()

print password

chatbot.process(block=True)
print "hi"