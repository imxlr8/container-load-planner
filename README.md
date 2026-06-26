# Container Load Planner — Firebase デプロイ手順

## ファイル構成
```
container-sim/
├── index.html       ← アプリ本体（HTML/CSS/JS 単一ファイル）
├── firebase.json    ← Firebase Hosting 設定
├── .firebaserc      ← プロジェクト紐付け設定
└── README.md
```

---

## デプロイ手順

### 1. Firebase CLI インストール（初回のみ）
```bash
npm install -g firebase-tools
```

### 2. Firebase にログイン
```bash
firebase login
```

### 3. Firebase プロジェクト作成
- https://console.firebase.google.com/ にアクセス
- 「プロジェクトを追加」でプロジェクトを作成

### 4. `.firebaserc` を編集
`YOUR_FIREBASE_PROJECT_ID` を実際のプロジェクト ID に変更する
```json
{
  "projects": {
    "default": "my-container-planner"
  }
}
```

### 5. デプロイ実行
```bash
cd container-sim
firebase deploy --only hosting
```

デプロイ後、以下のような URL でアクセスできます：
```
https://YOUR_PROJECT_ID.web.app
```

---

## アプリ機能

### コンテナ
- 20ft / 40ft / 40ft HC ドライコンテナから選択
- 上面断面図を画面サイズに合わせて自動スケール

### パレット
| 種別 | サイズ | 色 |
|------|--------|-----|
| EUR パレット | 1200 × 800 mm | 緑 |
| VMF パレット | 1100 × 1100 mm | 青 |

### 操作方法
| 操作 | 動作 |
|------|------|
| キャンバスをクリック | 選択中パレットを配置 |
| サイドバーからドラッグ | ドラッグ&ドロップで配置 |
| 配置済みをクリック | 選択（ハイライト） |
| 矢印キー | 選択中パレットを 10mm 移動 |
| Shift + 矢印キー | 100mm 移動 |
| Delete / Backspace | 選択中パレットを削除 |
| スナップ ON/OFF | 100mm グリッドへのスナップ切替 |
| グリッド ON/OFF | グリッド線の表示切替 |

### 統計情報（右パネル）
- EUR / VMF 枚数
- 合計枚数
- 床面積使用率（%）
- 使用面積バー
