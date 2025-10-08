import React from 'react';
import ProfileCard from './ProfileCard';

function App() {
    // ข้อมูลโปรไฟล์ตัวอย่าง
    const sampleProfile = {
        name: "ณัฐกิตต์ แก้วคำยศ",
        studentId: "67543210055-9",
        major: "วิศวกรรมซอฟต์แวร์",
        year: 2,
        age: 23,
        gpa: 2.98,
        email: "nattakit_ka67@live.rmutl.ac.th",
        hobbies: [
            "ออกกำลังกาย",
            "เดินป่า",
            "เตะบอล",
            "ฟังเพลง",
            "อ่านหนังสือ"
        ],
        skills: [
            "Adobe Premier Pro",
            "JavaScript",
            "React.js",
            "HTML/CSS",
            "Python",
            "Git",
            "Node.js"
        ],
        // TODO: นักศึกษาจะเพิ่ม fields เพิ่มเติมใน Challenge
         socialLinks: [
        { name: "GitHub", url: "https://github.com/nattakit1" },
        { name: "Instagram", url: "https://instagram.com/_chin.wtf" },
      
        // เพิ่มเติมตามต้องการ
    ]
    };

    return (
        <div style={{ 
            minHeight: '100vh', 
            background: 'linear-gradient(45deg, #f0f2f5 0%, #e8eaf6 100%)',
            padding: '20px'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h1 style={{ 
                    color: '#333', 
                    fontSize: '32px',
                    margin: '20px 0'
                }}>
                    🎓 Personal Profile Card
                </h1>
                <p style={{ color: '#666', fontSize: '16px' }}>
                    
                </p>
            </div>
            
            <ProfileCard profile={sampleProfile} />
        </div>
    );
}

export default App;