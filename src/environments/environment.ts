export const environment = {
  production: false,

  //url:"http://ssj-yamasei.com/api/",
  //urlmapi:"http://ssj-yamasei.com/mapi-v1/",
  
  //sysName:"IBQS Trigger",
  //sysPath:"http://ssj-yamasei.com/",


  // url:"https://krao-ipc6-dip.com/api/",
  // urlmapi:"https://krao-ipc6-dip.com/mapi-v1/",
  
  // sysName:"IBQS Trigger",
  // sysPath:"https://krao-ipc6-dip.com/",
  
  url:"http://qrcode-yamasei.com/api/",

  urlmapi:"http://qrcode-yamasei.com/mapi-v1/",
  urlmapi_:"https://www.mea.ths-true.com/api",
  
  sysName:"IBQS Trigger",
  sysPath:"http://qrcode-yamasei.com/",
  

  //12.4 edit kanban reset for platting

  //12.5.1 remove sale cancel , colect cancel
  //12.5.2 fixed ,maxyear and minyear in plan process.
  //12.5.3 fixed ,maxyear and minyear in collect fg process.
  //12.5.4 fixed  - locked save function : supply part , supply rm , out st.pro if status show failed.
  //              - if user not scan supply part ,cannot scan packing.
  //              - customer qr code export scan
  //12.5.5 fixed  - Fixed TMWTA Lotsite ไม่ตรง. , Collect FG , Sale
  //              - Fixed bug , locked save function : supply part , supply rm , out st.pro if status show failed.
  //12.5.6 fixed  - Fixed bug , locked save function : supply part , supply rm , out st.pro if status show failed.
  //12.5.7 fixed  - Fixed bug success , locked save function : supply part , supply rm , out st.pro if status show failed.
  //12.5.8 fixed  - Fixed bug success , locked save function : supply part , supply rm , out st.pro if status show failed.
  //12.5.9 fixed  - Fixed bug success , locked save function : supply part , supply rm , out st.pro if status show failed.
  //12.5.10-11 fixed  - Fixed bug success , add cutomer kanban JATH 17 parts.
  //12.5.12 - Add customer QR Code kanban to part Export and IPO , (PC1 , PD / function : sales , collect , cross kanban , plan pd)
  //12.5.13 - Add customer QR Code kanban , instock / outstock crumb PT and RM (PC1 , PC2 / function : sales , collect , cross kanban  , supply material , supply part , out st.prod)
  //12.5.13.1 - Add customer QR Code kanban ,instock / outstock crumb PT and RM (PC1,PC2/ function : sales , collect , cross kanban,supply material , supply part , out st.prod)
  //12.5.13.2 - Add customer QR Code kanban ,instock (PC1/ function : sales , collect , cross kanban)
  //12.5.13.3 - Add customer QR Code kanban ,instock (PC1/ function : sales , collect , cross kanban)
  //12.5.13.4 - Add customer QR Code kanban ,instock (PC1/ function : sales , collect , cross kanban)
  //12.5.13.5 - Add customer QR Code kanban , Outstock stock RM , (PC1/PC1 function : sales , collect , cross kanban, Out St.Prod, Supply RM)
  //12.5.13.6 - Add customer QR Code kanban , (PC1 function : sales , collect , cross kanban)
  //12.5.13.7 - Add customer QR Code kanban , (PC1 function : sales , collect , cross kanban)
  //12.5.13.8 - Add customer QR Code kanban , (PC1 function : sales , collect , cross kanban)
  //12.5.13.9 - Change checking format customer kanban , lotsize and part no.(PC1 function : sales , collect , cross kanban)
  //12.5.13.10 - Kanban check status (PC1,PC2,PD)
  //12.5.13.11 - Lock stock location Packing (PC1)
  sysVersion:"12.5.13.11",
  sysVersionName:"Version 12.5.13.11",
  coppyright:"© Copyright 2021. All Rights Reserved.",

  timeLoading:"36000",
  timeLoading_5_sec:36000,
  timeLoading_30_sec:36000,
  timeLoading_1_minute:72000,
  timeLoading_3_minute:216000,
  timeLoading_realtime:3600,


  TXT_SUM_CHECK:"กรุณาตรวจสอบความถูกต้องก่อนบันทึกค่ะ",
  TXT_SUM_WARNING:"ข้อมูลจะยังไม่ถูกส่งเข้าระบบหากไม่กดบันทึก!",
  TXT_SUM_FAILED:"บันทึกไม่สำเร็จ",
  TXT_SUM_SUCCESSED:"บันทึกสำเร็จ",
  TXT_MATLOT_NOTFOUND:"ไม่พบ Material lot",
  TXT_NO_TRACKK:"ไม่พบ TRACK ID",

  TXT_FIRST_SCAN:"แสกนคิวอาร์โค๊ดขั้นตอนก่อนหน้า",
  TXT_ID_DUPLICATED:"คิวอาร์โค๊ดซ้ำกันไม่ได้",
  TXT_KANBAN_CUSTOMER:"คิวอาร์โค๊ดลูกค้า",
  TXT_KANBAN_JIG:"คิวอาร์โค๊ด JIG",
  TXT_KANBAN_NOINCUSTOMER:"ยังไม่ส่งให้ลูกค้าหรือยังไม่ได้ขาย",
  TXT_STATUS_WRONGPARTNO:"Part no ไม่ตรงกัน",
  TXT_STATUS_WRONGLOTSIZE:"Lotsize ไม่ตรงกัน",
  TXT_STATUS_INPUT_FAILED:"ระบุข้อมูลไม่สมบูรณ์",
  TXT_STATUS_FAILED_QR:"คิวอาร์โค๊ดไม่ถูกต้อง",
  TXT_STATUS_FAILED:"ตรวจสอบคิวอาร์โค๊ดและการเชื่อมต่อเครือข่าย",
  TXT_STATUS_CHANGE_LOT_FAILED:"KANBAN ยังค้างอยู่ในสต๊อก ไม่สามาถเปลี่ยนได้",
	TXT_STATUS_NOTFOUND:"ไม่พบข้อมูล",
	TXT_STATUS_EXIST:"ไม่สามารถทำรายการซ้ำได้",
  TXT_STATUS_OUT_EXIST:"ถูกเบิกออกจากระบบแล้ว",
	TXT_STATUS_SUCCESS:"บันทึกสำเร็จ",
	TXT_STATUS_CANCEL:"ยกเลิกสำเร็จ",
  TXT_STATUS_DEFINED_LOCATION:"ระบุพื้นที่จัดเก็บสำเร็จ",
  TXT_STATUS_NOTFOUND_LOCATION:"ไม่พบข้อมูลพื้นที่จัดเก็บ",
  TXT_STATUS_DEFINED_MACHINE:"ระบุเครื่องจักรสำเร็จ",
  TXT_STATUS_NOTFOUND_MACHINE:"ไม่พบข้อมูลเครื่องจักร",
  TXT_STATUS_DEFINED_OPERATOR:"ระบุพนักงานสำเร็จ",
  TXT_STATUS_NOTFOUND_OPERATOR:"ไม่พบข้อมูลพนักงาน",

  TXT_RM_KANBAN:"[ แสกนคิวอาร์โค๊ด ]",
  TXT_PD_KANBAN:"[ แสกนคิวอาร์โค๊ด PD ]",
  TXT_PT_KANBAN:"[ แสกนคิวอาร์โค๊ด]",
  TXT_FG_KANBAN:"[ แสกนคิวอาร์โค๊ด FG ]",
  TXT_LOCATION_KANBAN:"[ แสกนคิวอาร์โค๊ดพื้นที่จัดเก็บ ]",
  TXT_MACHINE_QR:"[ แสกนคิวอาร์โค๊ดของเครื่องจักร ]",
  TXT_LINE_QR:"[ แสกนคิวอาร์โค๊ดของสายการผลิต ]",
  TXT_OPERATOR_QR:"[ แสกนคิวอาร์โค๊ดของพนักงาน ]",
  TXT_STATUS_START:"[ เริ่มตรวจจับคิวอาร์โค๊ด ]",
  TXT_STATUS_CHCEK_VALUE:"ระบุ วันที่,เวลา",
  TXT_STATUS_CHCEK_QC:"ระบุจำนวน ,สาเหตุ ,ขั้นตอนที่พบปัญหา",
  TXT_STATUS_FAILED_QTY:"ระบุจำนวนไม่ถูกต้อง",

	//scrap
	TXT_STATUS_OK_SCRAP:"เบิกเศษสำเร็จ:",
	TXT_STATUS_SALE_OK_SCRAP:"ขายเศษสำเร็จ:",
	TXT_STATUS_FAILED_SCRAP_OVER:"ทำรายการเกินจำนวน",
  TXT_STATUS_FAILED_SCRAP_LOWER:"ทำรายการไม่ครบจำนวน",
  TXT_STATUS_SCRAP_EXIST:"เบิกเศษค้างอยู่",
	TXT_STATUS_SALE_SCRAP_EXIST:"ขายเศษค้างอยู่",

  //blank kanban
  TXT_KANBAN_BLANK:"Kanban ว่าง",
  TXT_KANBAN_INSTOCK:"อยู่ในสต๊อก",

  
  TXT_KANBAN_ON_PROCESS:"อยู่ระหว่างการผลิต",
  TXT_KANBAN_IN_SUPPLIER:"อยู่ระหว่างส่งชุป",
  TXT_KANBAN_PACKING:"อยู่ในสถานะ Packing แล้ว",
  TXT_KANBAN_COLLECT:"อยู่ในสถานะ Collect แล้ว",
  TXT_KANBAN_SALE:"อยู่ในสถานะ Sale แล้ว",
 

  //login
  TXT_STATUS_LOGIN_FAILED:"ไม่พบข้อมูลพนักงาน",
  TXT_STATUS_LOGIN_SUCCESS:"เข้าสู่ระบบสำเร็จ",
  TXT_STATUS_LOGIN_QR_FAILED:"คิวอาร์โค๊ดไม่ถูกต้อง",

	//material mod
	 TXT_NOT_PLAN:"ยังไม่ได้วางแผน",
	 TXT_MOVE_SUCCESS:"ย้ายที่จัดเก็บสำเร็จ",
	 TXT_STATUS_NOINSTOCK:"ยังไม่รับเข้าสต๊อก",
	 TXT_STATUS_NOREPAIR:"ยังไม่ได้จัดเตรียม",
	 TXT_STATUS_NOSHOP:"ยังไม่ถูกส่งชุป",
	 TXT_STATUS_INSHOP:"อยู่ในขั้นตอนชุป",
   TXT_STATUS_NOOUTSTOCK:"ยังไม่ได้เบิกวัตถุดิบ",
	 TXT_STATUS_NOPROCESS:"ยังไม่ได้รับเข้าผลิต",
   TXT_CHANGE_LOT_SUCCESS:"เปลี่ยนขนาดบรรจุสำเร็จ",
   
	//sale
	 TXT_NO_SALE:"ยังไม่ได้ขาย จะรับเข้าสต๊อกไม่ได้",
	 TXT_COLLECT_SUCCESS:"จัดเตรียมสำเร็จ",
	 TXT_SALE_SUCCESS:"ขายสินค้าสำเร็จ",
	 TXT_STATUS_CHECK_QR_START:"[ เริ่มตรวจจับคิวอาร์โค๊ด...]",
	 TXT_STATUS_SUCCESS_EDIT_SNP:"เปลี่ยนขนาดบรรจุสำเร็จ",
	 TXT_STATUS_FAILED_EDIT_SNP:"ไม่สามารถขายเศษได้",
};


