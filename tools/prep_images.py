from PIL import Image, ImageFilter
import os, sys
S='shots/Screenshots/'
# name: (path, [blur boxes (x0,y0,x1,y1)])
M={
 'claude_app':('360M Claude App Screenshots/Screenshot 2026-11-04 222516.png',[]),
 'internal_app':('360M Internal App Screenshots/Screenshot 2026-11-04 222126.png',[]),
 'award':('Best Presentable Employee Award Screenshots/Screenshot 2026-11-04 222340.png',[]),
 'chatbot':('ChatBot Screenshots/Screenshot 2026-11-04 221438.png',[(232,230,546,735),(600,268,700,292)]),
 'databricks':('DataBricks Screenshots/Screenshot 2026-11-04 222046.png',[(640,336,1085,360),(1320,130,1350,160)]),
 'godaddy':('GoDaddy Domain Screenshots/Screenshot 2026-11-04 221824.png',[]),
 'powerautomate':('M365 Power Automate Screenshots/Screenshot 2026-11-04 221404.png',[(150,48,1090,78)]),
 'wordpress':('Wordpress Screenshots/Screenshot 2026-11-04 222021.png',[(548,350,820,388),(548,432,820,466)]),
 'admin':('Zoho Admin Support Screenshots/Screenshot 2026-11-04 221317.png',[(262,290,640,735)]),
 'books':('Zoho Books Integration Screenshots/Screenshot 2026-11-04 221238.png',[]),
 'dailyreport':('Zoho CRM Daily Report/Screenshot 2026-11-04 221201.png',[(98,375,188,700),(1072,365,1278,700),(160,48,980,78)]),
 'crm_leads':('Zoho CRM Screenshots/Screenshot 2026-11-04 221025.png',[(835,292,1345,692)]),
 'ai_condition':('Zoho CRM Screenshots/Screenshot 2026-11-04 172814.png',[]),
 'analytics':('Zoho Data Analytics Screenshots/Screenshot 2026-11-04 221709.png',[]),
 'campaigns':('Zoho Email Campaign Screenshots/Screenshot 2026-11-04 221555.png',[]),
 'flow':('Zoho Flow Screenshots/Screenshot 2026-11-04 221629.png',[]),
 'forms':('Zoho Forms Screenshots/Screenshot 2026-11-04 220920.png',[]),
 'leadchain':('Zoho LeadChain Screenshots/Screenshot 2026-11-04 221110.png',[]),
 'learn_wa':('Zoho Learn Screenshots/Screenshot 2026-11-04 220626.png',[(75,355,432,585),(500,70,1150,92),(150,360,420,380)]),
 'learn':('Zoho Learn Screenshots/Screenshot 2026-11-04 220843.png',[]),
}
for k,(p,boxes) in M.items():
    im=Image.open(S+p).convert('RGB')
    for b in boxes:
        reg=im.crop(b).filter(ImageFilter.GaussianBlur(10))
        im.paste(reg,b)
    w=1000 if im.width>900 else im.width
    if im.width>w: im=im.resize((w,int(im.height*w/im.width)),Image.LANCZOS)
    im.save(f'build/img/{k}.webp',quality=72,method=6)
    print(k,im.size,os.path.getsize(f'build/img/{k}.webp')//1024,'KB')
