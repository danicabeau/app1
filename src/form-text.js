import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function FormText() {
    // 1. สร้าง Reference สำหรับอ้างอิง DOM ของช่อง Password ทั้งสอง
    const textPswd = React.useRef()
    const textPswd2 = React.useRef()

    // 2. ฟังก์ชันตรวจสอบ Password ช่องแรก (onBlur)
    const onBlurPassword = () => {
        let pswd = textPswd.current.value
        // ตรวจสอบว่าถ้าไม่ว่าง และไม่ตรงตามเงื่อนไข (0-9, a-z, A-Z)
        if (pswd !== "" && !pswd.match(/^[0-9a-zA-Z]+$/)) {
            textPswd.current.value = "" // ล้างค่าในช่องออก
            alert('ต้องเป็น 0-9 หรือ a-z หรือ A-Z เท่านั้น')
        }
    }

    // 3. ฟังก์ชันตรวจสอบการยืนยัน Password (onBlur ของช่องที่สอง)
    const onBlurPassword2 = () => {
        // ตรวจสอบว่าค่าในช่องที่ 1 และ 2 ตรงกันหรือไม่
        if (textPswd.current.value !== textPswd2.current.value) {
            textPswd2.current.value = ""
            alert('รหัสผ่านทั้งสองช่องไม่ตรงกัน')
        }
    }

    return (
        <div className="mt-4 mx-auto p-3 rounded" 
             style={{ width: '400px', background: '#cee' }}>
            <form>
                {/* ช่อง Login */}
                <div className="form-group mb-2">
                    <label htmlFor="login">ชื่อผู้ใช้ (Login)</label>
                    <input type="text" id="login" name="login" maxLength="20" 
                           className="form-control form-control-sm" />
                </div>

                {/* ช่อง รหัสผ่าน */}
                <div className="form-group mb-2">
                    <label htmlFor="pswd">รหัสผ่าน</label>
                    <input type="password" id="pswd" name="pswd" maxLength="10" 
                           className="form-control form-control-sm" 
                           ref={textPswd} 
                           onBlur={onBlurPassword} />
                </div>

                {/* ช่อง ยืนยันรหัสผ่าน */}
                <div className="form-group mb-2">
                    <label htmlFor="pswd2">ใส่รหัสผ่านซ้ำ</label>
                    <input type="password" id="pswd2" 
                           className="form-control form-control-sm" 
                           ref={textPswd2} 
                           onBlur={onBlurPassword2} />
                </div>

                {/* ช่อง บันทึกช่วยจำ */}
                <div className="form-group mb-4">
                    <label htmlFor="memo">บันทึกช่วยจำ</label>
                    <textarea id="memo" name="memo" rows="2" maxLength="200" 
                              className="form-control form-control-sm">
                    </textarea>
                </div>

                {/* ปุ่มตกลง */}
                <div className="text-center">
                    <button type="button" className="btn btn-primary btn-sm px-4">
                        OK
                    </button>
                </div>
            </form>
        </div>
    )
}