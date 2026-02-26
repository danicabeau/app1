import React from 'react';

export default function App() {
    
    const inputFile = React.useRef();
    const selectMaxNumFiles = React.useRef();
    const selectMaxSize = React.useRef();

    let maxNumfiles = [1, 2, 3, 4, 5]; // จำนวนไฟล์ที่เลือกได้
    let maxFileSizes = [50, 100, 200, 500, 1000]; // ขนาดสูงสุดของไฟล์ (KB)

    
    const onClickButton = () => {
        let maxNumFilesValue = selectMaxNumFiles.current.value;
        let maxSize = selectMaxSize.current.value;

        
        if (inputFile.current.files.length > maxNumFilesValue) {
            alert(`เลือกได้ไม่เกิน ${maxNumFilesValue} ไฟล์`);
            return;
        }

        
        for (let f of inputFile.current.files) {
            if (f.size > maxSize * 1000) {
                alert(`ขนาดไฟล์เกินกว่าที่กำหนด (${maxSize} KB)`);
                return;
            }
        }

        alert('Files OK');
    };

    return (
        <div className="container">
            
            <div className="mt-4 mx-auto p-3 rounded border" 
                 style={{ width: '400px', background: '#cee' }}>
                
                <form>
                    <div className="form-group mb-3">
                        <label htmlFor="maxNumFiles" className="form-label">จำนวนไฟล์สูงสุด</label>
                        <select id="maxNumFiles" className="form-select form-select-sm" ref={selectMaxNumFiles}>
                            {
                                maxNumfiles.map(i => {
                                    return <option key={i} value={i}>{i}</option>
                                })
                            }
                        </select>
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="maxFileSize" className="form-label">ขนาดไฟล์สูงสุด (KB)</label>
                        <select id="maxFileSize" className="form-select form-select-sm" ref={selectMaxSize}>
                            {
                                maxFileSizes.map(i => {
                                    return <option key={i} value={i}>{i}</option>
                                })
                            }
                        </select>
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="file" className="form-label">เลือกไฟล์</label>
                        <input type="file" id="file" accept="image/*" 
                               className="form-control form-control-sm" 
                               ref={inputFile} multiple />
                    </div>

                    <div className="text-center mt-4">
                        <button type="button" className="btn btn-sm btn-primary px-4" 
                                onClick={onClickButton}>OK</button>
                    </div>
                </form>
            </div>
        </div>
    );
}