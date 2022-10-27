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
        print(e)
        raise e
        return "{}"
    finally:
        os.close(file)

try:
    import eel
    contact_saver("""
        {
            "firstName": "Adun",
            "secondName": "YT",
            "e-mail": null,
            "phone": 89001234567,
            "imgName": "adunyt-image.png"
        }""")
    eel.init("web")
    eel.start("index.html") 
except Exception as e:
    import ctypes  
    ctypes.windll.user32.MessageBoxW(0, str(e), "Ошибка!", 0)
    
