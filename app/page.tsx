export default function Home() {
  const menu = [
    { cat: "☕ قهوة سخونة", items: [
      { name: "إسبرسو", price: "10 درهم" },
      { name: "نص نص", price: "13 درهم" },
      { name: "كابوتشينو", price: "20 درهم" },
    ]},
    { cat: "🧃 عصائر", items: [
      { name: "أفوكادو", price: "28 درهم" },
      { name: "باناشي", price: "25 درهم" },
    ]},
    { cat: "🥐 فطور BNI Rzin", items: [
      { name: "فطور بلدي كامل", price: "38 درهم" },
      { name: "مسمن + عسل", price: "20 درهم" },
    ]},
  ];
  return (
    <div style={{fontFamily:'system-ui',background:'#fcfaf7',minHeight:'100vh',padding:'15px'}}>
      <div style={{maxWidth:'420px',margin:'0 auto',background:'white',borderRadius:'24px',overflow:'hidden',boxShadow:'0 10px 40px rgba(0,0,0,0.08)'}}>
        <div style={{background:'black',color:'white',padding:'30px 20px',textAlign:'center'}}>
          <h1 style={{fontSize:'28px',margin:0}}>CAFÉ BNI RZIN</h1>
          <p style={{margin:'5px 0 0',color:'#c9a86a'}}>مقهى بني رزين</p>
        </div>
        <div style={{padding:'20px'}}>
          {menu.map((s) => (
            <div key={s.cat} style={{marginBottom:'28px'}}>
              <h2 style={{fontSize:'15px',borderLeft:'4px solid #c9a86a',paddingLeft:'10px'}}>{s.cat}</h2>
              {s.items.map((i) => (
                <div key={i.name} style={{display:'flex',justifyContent:'space-between',padding:'13px 0',borderBottom:'1px dashed #eee'}}>
                  <span style={{fontWeight:600}}>{i.name}</span>
                  <span style={{background:'#111',color:'white',padding:'2px 10px',borderRadius:'20px',fontSize:'13px'}}>{i.price}</span>
                </div>
              ))}
            </div>
          ))}
          <a href="https://wa.me/212600000000" style={{display:'block',background:'#111',color:'white',textAlign:'center',padding:'16px',borderRadius:'50px',textDecoration:'none',fontWeight:'bold'}}>كوموندي واتساب 📱</a>
        </div>
      </div>
    </div>
  )
}
