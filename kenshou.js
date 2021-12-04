function getRandom() {
    let random = Math.floor(Math.random() * 1000001) + 1;
    return random;
}
let total = [];
let result = null
let count = null
let counter = null
//当たるまで引き続けたときの引いた回数を求める
function normal200() {
    for (let i = 0; i < 20; i++) {
        result = getRandom();
        if (result <= 67836) {
            //0.7%が10連で一つ以上出る確率6.7836%
            count = i + 1;
            total.push(count);
            return count + '0回';
        }
        else if (i === 19) {
            count = 20
            total.push(count);
            return count + '0回(天井)';
        }

    }
}
//フェスの場合
function fest200() {
    for (let i = 0; i < 20; i++) {
        result = getRandom();
        if (result <= 131501) {
            count = i + 1;
            total.push(count);
            return count + '0回';
        }
        else if (i === 19) {
            count = 20
            total.push(count);
            return count + '0回(天井)';
        }

    }
}
//天井が300の場合
function normal300() {
    for (let i = 0; i < 30; i++) {
        result = getRandom();
        if (result <= 67836) {
            count = i + 1;
            total.push(count);
            return count + '0回';
        }
        else if (i === 29) {
            count = 30;
            total.push(count);
            return count + '0回(天井)';
        }

    }
}
//天井が300のフェスの場合
function fest300() {
    for (let i = 0; i < 30; i++) {
        result = getRandom();
        if (result <= 131501) {
            count = i + 1;
            total.push(count);
            return count + '0回';
        }
        else if (i === 29) {
            count = 30;
            total.push(count);
            return count + '0回(天井)';
        }

    }
}
//2枚入手する場合
function normal400() {
    counter = 0
    for (let i = 0; i < 40; i++) {
        result = getRandom();
        if (result <= 67836) {
            counter += 1;
        }
        if (i === 19) {
            counter += 1;
        }
        if (i === 39) {
            count = 40;
            total.push(count);
            return count + '0回(2天井!)';
        }
        if (counter >= 2) {
            count = i + 1;
            total.push(count);
            return count + '0回';

        }
    }
}
//フェス限を2枚入手する場合
function fest400() {
    counter = 0
    for (let i = 0; i < 40; i++) {
        result = getRandom();
        if (result <= 131501) {
            counter += 1;
        }
        if (i === 19) {
            counter += 1;
        }
        if (i === 39) {
            count = 40
            total.push(count);
            return count + '(0回2天井!)';
        }
        if (counter >= 2) {
            count = i + 1;
            total.push(count);
            return count + '0回';

        }
    }
}
let names = ['ニュペコ', 'ニュネカ', 'ギッコロ', 'シェフィ', '水カスミ', 'プリキャル', 'デレマコ', 'デレマホ', '聖ちぇる', '聖クロエ',
    'イノベル', 'カヤベル', 'サギョイ', 'サフユ', 'プリレイ', '水エリコ', '水シズル', '水ノゾミ', '水チカ', 'ハツシオ×2',
    'オツキ', 'オユキ', 'クレジッタ', 'ハオリ', 'ハロスズ', 'ホマレ', '闇イオ', '闇クウカ', 'クリリン×2',];
document.write('<p>' + names[0] + ' ' + normal300() + '<p/>');
document.write('<p>' + names[1] + ' ' + normal300() + '<p/>');
document.write('<p>' + names[2] + ' ' + normal300() + '<p/>');
document.write('<p>' + names[3] + ' ' + fest300() + '<p/>');
document.write('<p>' + names[4] + ' ' + normal300() + '<p/>');
document.write('<p>' + names[5] + ' ' + fest300() + '<p/>');
document.write('<p>' + names[6] + ' ' + normal300() + '<p/>');
document.write('<p>' + names[7] + ' ' + normal300() + '<p/>');
document.write('<p>' + names[8] + ' ' + normal200() + '<p/>');
document.write('<p>' + names[9] + ' ' + normal200() + '<p/>');
document.write('<p>' + names[10] + ' ' + normal200() + '<p/>');
document.write('<p>' + names[11] + ' ' + normal200() + '<p/>');
document.write('<p>' + names[12] + ' ' + normal200() + '<p/>');
document.write('<p>' + names[13] + ' ' + normal200() + '<p/>');
document.write('<p>' + names[14] + ' ' + fest200() + '<p/>');
document.write('<p>' + names[15] + ' ' + normal200() + '<p/>');
document.write('<p>' + names[16] + ' ' + normal200() + '<p/>');
document.write('<p>' + names[17] + ' ' + normal200() + '<p/>');
document.write('<p>' + names[18] + ' ' + normal200() + '<p/>');
document.write('<p>' + names[19] + ' ' + fest400() + '<p/>');
document.write('<p>' + names[20] + ' ' + normal200() + '<p/>');
document.write('<p>' + names[21] + ' ' + normal200() + '<p/>');
document.write('<p>' + names[22] + ' ' + normal200() + '<p/>');
document.write('<p>' + names[23] + ' ' + normal200() + '<p/>');
document.write('<p>' + names[24] + ' ' + normal200() + '<p/>');
document.write('<p>' + names[25] + ' ' + fest200() + '<p/>');
document.write('<p>' + names[26] + ' ' + normal200() + '<p/>');
document.write('<p>' + names[27] + ' ' + normal200() + '<p/>');
document.write('<p>' + names[28] + ' ' + normal400() + '<p/>');
let sum = total[0] + total[1] + total[2] + total[3] + total[4] + total[5] + total[6] + total[7] + total[8] + total[9]
    + total[10] + total[11] + total[12] + total[13] + total[14] + total[15] + total[16] + total[17] + total[18] + total[19]
    + total[20] + total[21] + total[22] + total[23] + total[24] + total[25] + total[26] + total[27] + total[28];
document.write('<h1>' + '合計' + sum + '0回' + '<h1/>');
document.write('<h5>' + '平均値は3253回くらい' + '<h5>');
document.write('<h5>' + '標準偏差は382.8くらい' + '<h5>');
