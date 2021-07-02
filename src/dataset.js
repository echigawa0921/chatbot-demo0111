const defaultDataset = {
    "init": {
        answers: [
            {content: "とにかく足が速くなりたい", nextId: "job_offer"},
            {content: "越川のタイムを知りたい", nextId: "consultant"},
            {content: "おすすめのトレーニング", nextId: "community"},
            {content: "お付き合いから始めたい", nextId: "dating"},
        ],
        question: "こんにちは！越川のかけっこ教室へようこそ！どしどし質問してください！",
    },
    "job_offer": {
        answers: [
            {content: "50m走", nextId: "website"},
            {content: "100m走", nextId: "webapp"},
            {content: "他のスポーツに活かしたい", nextId: "automation_tool"},
            {content: "走り方をかっこよくしたい", nextId: "other_jobs"}
        ],
        question: "速くなりたい種目（スポーツ）を選んでください",
    },
    "website": {
        answers: [
            {content: "問い合わせ", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "50m走で周りより速く走りたいんですね。コチラからお問い合わせ出来るので詳細にお聞かせください！",
    },
    "webapp": {
        answers: [
            {content: "問い合わせ", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "100m走を走るのに筋力やパワーはいらないです。必要なのは走る際に必要なポイントを意識できているかだけです。コチラからお問い合わせ出来るので詳細にお聞かせください！",
    },
    "automation_tool": {
        answers: [
            {content: "問い合わせ", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "速く走れて損するスポーツはありません。ぜひ、種目ポジション等詳しくお聞かせください！",
    },
    "other_jobs": {
        answers: [
            {content: "問い合わせ", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "かっこよく走りたいですよね。中学校まで実は、走るのが速ければそれだけでモテます。コチラからお問い合わせ出来るので詳細にお聞かせください！",
    },
    "consultant": {
        answers: [
            {content: "試合の走りを見る", nextId: "https://www.youtube.com/watch?v=RFNiG2EIDzo&list=LL&index=17&t=2s"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "越川は、高校時代100mを10秒82,200mを22.19で走り、京都ジュニア大会5位、奈良大会200m走3位の成績を収めています。",
    },
    "community": {
        answers: [
            {content: "おすすめ腹筋YouTube", nextId: "https://www.youtube.com/watch?v=sM3W0b1PdOY&t=171s"},
            {content: "おすすめ階段メニュー", nextId: "https://www.youtube.com/watch?v=r4fUcKTZscU/"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "特に下半身強化に階段ダッシュと体幹の安定に腹筋を鍛えることを推奨しています。",
    },
    "dating": {
        answers: [
            {content: "連絡する", nextId: "https://www.wantedly.com/id/yuki_Echigawa9"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "まずは一緒にランチでもいかがですか？DMしてください。",
    },
}

export default defaultDataset