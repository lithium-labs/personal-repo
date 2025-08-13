function homoglyphReplacer(strings, mappingText) {
  const map = new Map();

  const lines = mappingText.split(/\r?\n/);
  for (const rawLine of lines) {
    if (!rawLine || rawLine.length < 2) continue;
    const original = rawLine[0];
    const homos = [...rawLine.slice(1)];
    if (homos.length) map.set(original, homos);
  }

  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  const transformed = strings.map(str => {
    const chars = [...str];
    const out = chars.map(ch => {
      if (map.has(ch)) return pickRandom(map.get(ch));
      return ch;
    });
    return out.join('');
  });

  return transformed.join(' ');
}

const homoglyphs = `!ǃⵑ
&＆
(❨
)❩
+᛭
/᜵
0OΟОՕ߀੦ଠഠⲞⵔ〇ꓳＯ𐊒𐊫𐐄𐓂𑢵𑣠𝟢𝟶
1𝟣
2𝟤
3ƷӠꝪꞫ𝟥
4Ꮞ𝟦
6𝟨𝟼
7𝟩
8𐌚
9Ꝯ𝟫𝟿
:ːꓽ꞉
;;
=᐀＝
>＞
?？
@＠
AΑАᎪᗅꓮ𐊠𖽀
BΒВᏴᗷꓐ𐊂𐊡
CϹСᏟᑕⅭⲤ𝙲
DᎠᗞⅮꓓＤ𝙳
EΕЕᎬⴹꓰ𐊆
Fᖴꓝ𐊇
GԌᏀꓖＧ𝙶
HΗНᎻᕼⲎꓧ𐋏
JЈᎫᒍ
KΚКᏦᛕKⲔꓗ𝖪
LᏞᒪⳐꓡ𐐛𑢣𖼖
MΜМᎷ
NΝⲚꓠＮ
PΡРᏢⲢꓑ𐊕
RᏒꓣ𖼵𝈖
SЅᏚꓢ𐐠𖼺
TΤТᎢⲦꓔ𐊗𐊱𐌕🝨
Uꓴ𐓎
VᏙⴸꓦ𑢠𖼈𝈍
WԜᎳꓪ
XΧХ᙭Ⲭⵝꓫ𐊐𐊴
YΥⲨꓬ𐊲𖽃
ZΖᏃꓜ
aа𝚊
bᑲᖯ𝖻
cϲсᴄⲥꮯ
dԁᏧꓒ𝖽
eеe
f𝖿f
hһհ
k𝗄k
oοo
pρрⲣ𝗉
qԛq
sѕꜱꮪ
uυᴜ𐓶
vνѵᴠꮩ
wԝᴡꮃ
xхx
yуy
zᴢꮓ`

homoglyphReplacer(args, homoglyphs)
