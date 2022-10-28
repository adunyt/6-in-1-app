import mailbox
import eel
from imap_tools import MailBox, AND
import smtplib

@eel.expose
def contact_saver(contact: str) -> str:
    import json
    import os
    try:
        newContact = json.loads(contact)
        file = os.open("contacts.json", os.O_RDWR|os.O_CREAT)
        jsonFile: dict = json.load(file)
        contacts: list = jsonFile["contacts"]
        contacts.append(newContact)
        json.dump(contacts, file)
    except Exception as e:
        raise e
    finally:
        os.close(file)

try:
    getLetters()
    eel.init("web")
    eel.start("index.html") 
except Exception as e:
    import ctypes  
    ctypes.windll.user32.MessageBoxW(0, str(e), "Ошибка!", 0)
    
