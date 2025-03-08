import {
  QrCodeDownloadTrigger,
  QrCodeFrame,
  QrCodePattern,
  QrCodeRoot,
} from "@ark-ui/react";

export default function QrCode() {
  return (
    <div className="w-md">
      <QrCodeRoot suppressHydrationWarning defaultValue="http://ark-ui.com">
        <QrCodeFrame>
          <QrCodePattern />
        </QrCodeFrame>
        <QrCodeDownloadTrigger
          className="px-4 py-2 bg-orange-400 text-white rounded cursor-pointer"
          fileName="qrcode.svg"
          mimeType="image/svg+xml"
        >
          Download
        </QrCodeDownloadTrigger>
      </QrCodeRoot>
    </div>
  );
}
