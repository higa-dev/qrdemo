declare module 'react-qr-scanner' {
    import * as React from 'react';

    export interface QrReaderProps {
        delay?: number;
        onError?: (error: any) => void;
        onScan?: (data: string | null) => void;
        style?: React.CSSProperties;
        className?: string;
        facingMode?: 'user' | 'environment';
        legacyMode?: boolean;
    }
    export default class QrReader extends React.Component<QrReaderProps> { }

}