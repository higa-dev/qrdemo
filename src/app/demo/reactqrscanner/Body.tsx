'use client'

import { useState } from 'react';

import QrScannerClient from './QrScannerClient';


export default function Body() {
    const [display, setDisplay] = useState<boolean>(false);
    const [result, setResult] = useState("");
    const [hasError, setHasError] = useState(false);

    const handleError = (error: any) => {
        console.error('QR Scanner Error:', error);
        setHasError(true);
    };

    const handleScan = (data: string | null) => {
        if (data) {
            console.log('QR Code Data:', data);
            setResult(data);
        }
    }

    const startScanner = () => {
        setDisplay(true);
    }

    return <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl mb-4">二次元コード読み取りデモ</h1>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={startScanner}>読み取り開始</button>
        <div>読み取り結果：{result || ""}</div>

        <div className="text-md">---</div>
        {display && (
            <div id="modal-container">
                <div id=":aaa" role="dialog" aria-modal="true" aria-labelledby=':aaa' >
                    <div className="fixed bottom-0 left-0 right-0 top-0 flex flex-col  z-50 animate-fade-in overflow-y-auto overflow-x-hidden p-lg" style={{ backgroundColor: 'rgba(26, 26, 28, 0.2)' }}>
                        <div className="bg-white m-auto flex min-h-[200px] w-full animate-slide-in-bottom flex-col overflow-y-auto overflow-x-hidden rounded-lg bg-primary max-w-sm">
                            <div>
                                <div className='flex items-start justify-between rounded-t-xl p-md'>
                                    <h2 className="flex flex-col text-heading-mobile-md desktop:heading-md text-body">二次元コード読み取り</h2>
                                </div>
                                {hasError ? (<div>エラー発生
                                </div>) : (display && (
                                    <div>
                                        <QrScannerClient onScan={handleScan} onError={handleError}></QrScannerClient>
                                    </div>
                                )
                                )}
                            </div>

                            {/* <div className="w-full max-w-md p-4 bg-white shadow-md rounded-lg">
                                <QrScannerClient onScan={handleScan} onError={handleError}></QrScannerClient>

                            </div > */}
                            <div className='flex items-center justify-center p-md'>
                                <button data-testid="close-button"
                                    className="inline-block rounded bg-transparent px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-accent-300 focus:text-primary-accent-300 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none"
                                    onClick={() => setDisplay(false)}
                                >
                                    キャンセル
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}


    </div >

}