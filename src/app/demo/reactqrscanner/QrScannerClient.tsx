"use client";

import dynamic from "next/dynamic";
import React from "react";
import type { QrReaderProps } from "react-qr-scanner";

// SSRを無効化して動的import
const QrReader = dynamic<QrReaderProps>(
    () => import("react-qr-scanner").then((mod) => mod.default),
    { ssr: false }
);

type Props = QrReaderProps;

export default function QrScannerClient(props: Props) {
    return (
        <QrReader
            {...props}
            onScan={props.onScan}
            onError={props.onError}
        />
    );
}