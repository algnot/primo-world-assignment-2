# 🤖 Sorted Collections Merge Project Guide

โปรเจกต์ TypeScript สำหรับฟังก์ชัน `merge` ที่รับ 3 อาร์เรย์ของจำนวนเต็มแล้วคืนค่าอาร์เรย์ที่เรียงจากน้อยไปมาก **โดยห้ามใช้ sort function ใด ๆ**

```ts
merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[]
```

เงื่อนไขที่โจทย์กำหนด

- `collection_1` เรียงมาแล้วจาก **max → min**
- `collection_2` เรียงมาแล้วจาก **min → max**
- `collection_3` เรียงมาแล้วจาก **min → max**

---

# 😶‍🌫️ Installation Guide

Environment ที่สำคัญ

- node `^v.18.0.0`
- npm `^v.8.0.0`

## Development

```
  1: 📄 npm install
  2: 📄 npm start
  3: 📄 npm test
```

`npm start` จะรันตัวอย่างการ merge  
`npm test` จะรัน unit test ทั้งหมด

คำสั่งเสริม

```
  📄 npm run test:watch
  📄 npm run build
```

คำเตือน 💣

- ห้ามใช้ `Array.sort`, `toSorted` หรือ sort function อื่นใดในโค้ด
- ห้ามแก้ input array ต้นทาง ให้คืนค่า array ใหม่เท่านั้น
- ห้าม push `node_modules`, `dist` หรือ secret ต่าง ๆ ขึ้นมา
- ก่อนเปิด PR / ส่งงาน ให้รัน `npm test` ให้ผ่านทุกเคส
- ถ้าฝ่าฝืนจะโดนยิง ถ้ายังไม่ตายจะโดนยิงซ้ำ

---

Happy hacking :)
