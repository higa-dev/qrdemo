'use client'

import dynamic from 'next/dynamic';

import { useState } from 'react';
//const QrScanner = dynamic(() => import('react-qr-scanner'), { ssr: false });

import QrScanner from 'react-qr-scanner';
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
        <h1 className="text-2xl mb-4">React QR Scanner Demo</h1>
        <button onClick={startScanner}>qqq</button>

        {hasError || !display ? (<></>) : (
            <div className="w-full max-w-md p-4 bg-white shadow-md rounded-lg">
                <QrScannerClient onScan={handleScan} onError={handleError}></QrScannerClient>
                <div>読み取り結果：{result || ""}</div>
            </div >

        )
        }
        <div className="text-md">---</div>
    </div >

}