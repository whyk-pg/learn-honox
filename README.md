# Learn HonoX

## 本リポジトリの目的
Honoから出たメタフレームワークHonoXでReact環境を構築するため

## 本リポジトリの達成目標
- [x] HonoXのプロジェクトを立ち上げる
- [x] レンダラをReactに変更する
- [x] Tailwind CSSを導入する
- [x] 最新のHonoXに更新する
- [x] 最新のHonoXのレンダラをReactに変更する
- [x] Ark UIを導入する
  - [ ] ~~`@ark-ui/react/qr-code`を使ってQRコードをダウンロードさせる~~
  - [ ] ~~`@ark-ui/react/accordion`を使って折り畳み要素を追加する~~
- [ ] Panda CSSを導入する

### エラーについて
#### Ark UIのHydration mismatch
`qr-code`と`accordion`ともに、`id`などのミスマッチが見受けられた  
suppressHydrationWarningを使えば抑制できるが乱用するべきものではないため、対策が必要  
これがHonoX起因なのかArk UI起因なのかは不明（Ark UIをここで初めて使うため）

### `@ark-ui/react/qr-code`のダウンロードエラー
以下のエラーが発生する

```
Uncaught Error: [zag-js > getDataUrl]: Could not find the svg element
    at getDataUrl (@ark-ui_react.js?v=0e5afc40:631:19)
    at downloadQrCode (@ark-ui_react.js?v=0e5afc40:29087:11)
    at Machine.executeActions (@ark-ui_react.js?v=0e5afc40:2749:31)
    at Machine.performTransitionEffects (@ark-ui_react.js?v=0e5afc40:2856:12)
    at Machine.performStateChangeEffects (@ark-ui_react.js?v=0e5afc40:2864:12)
    at Machine.transition (@ark-ui_react.js?v=0e5afc40:2905:12)
    at @ark-ui_react.js?v=0e5afc40:2889:12
    at onClick (@ark-ui_react.js?v=0e5afc40:29049:11)
    at processDispatchQueue (react-dom_client.js?v=0e5afc40:11577:19)
    at react-dom_client.js?v=0e5afc40:11988:11
```

UI上はSVGが表示されているが、それがダウンロードボタンで取得できていない模様

## 参考資料
- [Suppressing unavoidable hydration mismatch errors - hydrateRoot – React](https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors)
- [QR Code - Zag](https://zagjs.com/components/react/qr-code)
- [uqr · Packages · UnJS](https://unjs.io/packages/uqr)
