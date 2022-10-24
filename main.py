try:
    import eel
    eel.init("web")
    eel.start("index.html") 
except Exception as e:
    import ctypes  
    ctypes.windll.user32.MessageBoxW(0, str(e), "Ошибка!", 0)