
const data = [
  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=989cecc5-69a1-4de7-811c-9a7d084ddd53',
    title: '마포시티투어',
    region: 'seoul',
    thema: 'adventure',
  },
  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=6e2dbef2-4a7f-4725-a4f0-c25c82cfdeae',
    title: '롯데월드 놀이공원',
    region: 'seoul',
    thema: 'adventure',
  },
  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=6c7f2b39-6819-418f-9dd4-8d066949e758',
    title: '다이나믹메이즈',
    region: 'seoul',
    thema: 'adventure',
  },
  {
    image: 'https://a.cdn-hotels.com/gdcs/production32/d763/a5bc7ece-5ec1-480b-9a68-359acebd612a.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',
    title: '북악산',
    region: 'seoul',
    thema: 'adventure',
  },
  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=b96b695b-c9d3-4437-a129-e19ee821e46e',
    title: '트릭아이 뮤지엄',
    region: 'seoul',
    thema: 'adventure',
  },
  {
    image: 'https://mblogthumb-phinf.pstatic.net/MjAyMDA1MTFfMjg3/MDAxNTg5MTcwMDcwNjQ1.zwqjhICxfX6tiRAMDIywuuM0PPxo8ZCij6OmpdTRQ2kg.WJFcre5ECPb3H3lwGjiVmtWVvCfCNG4rXsjgLwc4VLUg.JPEG.cherrypuddin/%EC%95%BC%EA%B0%84%EA%B0%9C%EC%9E%A5.JPG?type=w800',
    title: '경복궁 야간개장',
    region: 'seoul',
    thema: 'healing',
  },
  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=89296f53-1bbc-4486-81f8-67b4c9ec79cc',
    title: '서울로 7017',
    region: 'seoul',
    thema: 'healing',
  },
  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=f3b66788-234e-485a-8768-00cf24089f7f',
    title: '올림픽 공원',
    region: 'seoul',
    thema: 'healing',
  },
  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=085df4a0-7d9e-47f7-9c98-326f3933fb90',
    title: '용산가족공원',
    region: 'seoul',
    thema: 'healing',
  },
  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=0df110bf-5cf7-4258-9195-128231b145c9',
    title: '부암동 거리',
    region: 'seoul',
    thema: 'healing',
  },
  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=bf089995-0aef-48bb-b3fe-131f718510aa',
    title: '서울 광장시장',
    region: 'seoul',
    thema: 'foodtour',
  },
  {
    image: 'https://t1.daumcdn.net/cfile/tistory/99E8003A5FD8182E0D',
    title: '을지로 노가리 골목',
    region: 'seoul',
    thema: 'foodtour',
  },
  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=7e300270-11a2-4cf5-8ce7-aebcc7c88811',
    title: '통인시장',
    region: 'seoul',
    thema: 'foodtour',
  },
  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=603ceb25-5b86-4f77-b187-2ac8bc37d8a4',
    title: '이태원 터키베이커리',
    region: 'seoul',
    thema: 'foodtour',
  },
  {
    image: 'https://mblogthumb-phinf.pstatic.net/MjAyMDA3MjNfMjUx/MDAxNTk1NDk0OTQ1MjQx.HV_b-aQe_0Sf_5Ks-EGMxCq3B_HkAO1ywGtTWLiWEicg.Rlcl_HqTwzvZ01j51Q_4SRalSI6AnHELTE3qGNaBAD8g.JPEG.lolrabbit/%ED%99%8D%EB%8C%80_%EB%8D%B0%EC%9D%B4%ED%8A%B8_%EB%A7%9B%EC%A7%91_%EC%9A%B0%EC%99%80_(20).JPG?type=w800',
    title: '홍대 오코노미야끼 가게',
    region: 'seoul',
    thema: 'foodtour',
  },
  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=25ac10bb-f66a-4281-b27c-3d1674837e0d',
    title: '용인 앤디스 가든',
    region: 'gyeongi',
    thema: 'familytour',
  },
  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=d54830c8-705b-4ee0-9a78-3d4f65065d7f',
    title: '인천 신시모도',
    region: 'gyeongi',
    thema: 'familytour',
  },
  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=63d0076b-967a-4118-83c8-7f5004b1d0fe',
    title: '인천 석모도 미네랄온천',
    region: 'gyeongi',
    thema: 'familytour',
  },
  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=72048185-e17f-4135-87d6-9d3e843498d0',
    title: '광명 에디슨뮤지엄',
    region: 'gyeongi',
    thema: 'familytour',
  },
  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=a0153fd9-8e0f-4a11-8ad7-ea42ff9a8f66',
    title: '덕적도 갈대 군락지',
    region: 'gyeongi',
    thema: 'familytour',
  },
  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=f5fcb792-f413-490c-bd86-3e898778f264',
    title: '원주 출렁다리',
    region: 'gangwon',
    thema: 'friends',
  },
  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=6ba88095-71c7-4850-b97d-70ae4c178af7',
    title: '산너미목장',
    region: 'gangwon',
    thema: 'friends',
  },
  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=d448e6f6-04a4-4ff8-8475-673adbdef319',
    title: '강릉 안반데기',
    region: 'gangwon',
    thema: 'friends',
  },
  {
    image: 'http://img3.tmon.kr/cdn3/deals/2019/05/08/2041588134/original_2041588134_front_4d00c_1557304917production.jpg',
    title: '대명 쏠비치 & 산토리니',
    region: 'gangwon',
    thema: 'friends',
  },
  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=cb812220-d4d6-4a6b-bdde-8b783d99aa92',
    title: '스퀴즈 브루어리',
    region: 'gangwon',
    thema: 'friends',
  },
  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=e6c900e7-606b-4285-83aa-c531b1eb1622',
    title: '부산 송도 해안 볼레길',
    region: 'gyeongsang',
    thema: 'healing',
  },
  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=b4c963ee-e58d-4740-b092-dace7be4ece4',
    title: '부산 감천문화마을',
    region: 'gyeongsang',
    thema: 'healing',
  },
  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=99f9c06f-e7ff-4a91-8395-8ae80de09520',
    title: '전리단길 샬롯',
    region: 'gyeongsang',
    thema: 'healing',
  },
  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=7d2c106c-83ed-45c9-895c-1c0067e759ca',
    title: '흰여울 문화마을',
    region: 'gyeongsang',
    thema: 'healing',
  },
  {
    image: 'https://mblogthumb-phinf.pstatic.net/MjAxODExMDJfMjIz/MDAxNTQxMTM3ODM1OTM3.DAGoZyQXXSK7dkaB5Af1RdPh5eCVCzT9JcSA1e3ji34g.49iaB4_J2KErqeUMavx28uiE_zIpiiKVN9E-A5gGspEg.JPEG.korea_diary/13.jpg?type=w800',
    title: '울산 간월재',
    region: 'gyeongsang',
    thema: 'healing',
  },

  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=f394632d-8dd8-4839-b5fc-26a5232d1409',
    title: '낭만포차',
    region: 'jeonla',
    thema: 'friends'
  },
  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=4110023f-2eac-46f8-9638-bf2f6793d78f',
    title: '선유도',
    region: 'jeonla',
    thema: 'friends'
  },
  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=5665d30e-d0df-459f-b065-b1565db46a38',
    title: '군산 근현대사 거리',
    region: 'jeonla',
    thema: 'friends'
  },
  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=a760f3d7-87e2-444b-919f-524c4bcbe118',
    title: '구례산수유꽃축제',
    region: 'jeonla',
    thema: 'friends'
  },
  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=1dd1f2c7-bd9d-4a8e-b658-95f00669fa59',
    title: '신안 반월도&박지도',
    region: 'jeonla',
    thema: 'friends'
  },
  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=20d4f569-aaa1-42c2-94f9-c7cf00055258',
    title: '난지한강공원',
    region: 'seoul',
    thema: 'friends'
  },
  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=d1858b34-f1e3-4b42-8f0e-bd5dfa10b1a7',
    title: '팔미도 선상낚시',
    region: 'gyeongi',
    thema: 'friends'
  },
  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=21464d13-bd6e-48bc-9368-8118b707b953',
    title: '글램핑 앤 카라반',
    region: 'gyeongi',
    thema: 'friends'
  },
  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=5280ea9f-99e9-42fb-82fc-0639166dedd6',
    title: '대구 수월루',
    region: 'gyeongsang',
    thema: 'friends'
  },
  {
    image: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=46ab91aa-b241-4fdf-9d71-c3029e8e6e48',
    title: '원대리 자작나무 숲',
    region: 'gangwon',
    thema: 'friends'
  }


]
export default data