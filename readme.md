## 팀명
리액트18

### 팀원
Mission1 - 이가윤, 신혜리
<br>
Mission2 - 이선재, 한재성

## 배포주소
http://react18-week1.s3-website.ap-northeast-2.amazonaws.com

## 디렉토리 구조

```bash
├─ README.md
├─ package.json
├─ public
│	 └─ index.html
└─ src
   ├─ pages   
	 │	└─ mission1
 	 │	└─ mission2
	 │	└─ Home.jsx
   ├─ routes    
	 ├─ utils     
	 ├─ constants
	 └─ api
   └─ App.js
   └─ index.js
```
<br>

## Mission 1

### 구현사항

- [x]  수취국가 선택 시 해당 국가 환율 표시
- [x]  submit 버튼 클릭 시 계산된 수취금액, 환율, 수취국가 표시
- [x]  환율과 수취금액은 소숫점 2째자리까지, 3자리 이상일 경우 “,”를 찍어 표시
- [x]  환율정보를 실시간으로 가져오기 - 최초 렌더링 시 가져온 데이터로 계산한 금액을 수취국가를 변경할 때마다 표시
- [x]  올바르지 않은 수취금액 입력시 에러메시지 “송금액이 바르지 않습니다”를  빨간 글씨로 표시
- [x]  세부적인 에러메세지 추가
    - [x]  0보다 작은 금액일 경우 ‘ 0보다 큰 값을 입력해주세요’
    - [x]  10,000 USD보다 큰 금액일 경우 ‘10,000 USD보다 작은 금액을 입력해주세요’
    - [x]  바른 숫자가 아닐경우 ‘숫자만 입력해주세요’

![ezgif com-gif-maker (14)](https://user-images.githubusercontent.com/67543454/151036566-ff50da09-7eee-4243-8186-78ec9adc51b3.gif)


<br>

## Mission 2

## 구현사항

- [x]  사용자가 숫자만 입력 해야된다.
- [x]  1000이상을 입력할 경우 자동적으로 “1,000”와 같이 변경되어야 한다.
- [x]  드롭다운 메뉴는 USD, CAD, KRW, HKD, JPY, CNY로 한정한다.
- [x]  “USD” 드롭다운 메뉴를 “CAD”로 선택할 경우, 탭의 “CAD”는 제거되고 “USD”가 생성되어야 한다.
- [x]  사용자 입력 혹은 드롭다운 메뉴를 통해 통화 변경 시  변경될 환율과 기준일 정보는 동기화 되어야 한다.
- [x]  날짜 포맷은 “YYYY-Jan-DD”를 따라야 한다.

## 컴포넌트 구조
![image](https://user-images.githubusercontent.com/67543454/151036367-40e20048-0efc-446c-835f-6e5ad9a93c3b.png)

## GIF

1. 숫자만 입력 및 쉼표 구현

![환율계산1](https://user-images.githubusercontent.com/67543454/151036246-3ea95aaf-2321-456d-b070-b529f656917d.gif)

    
2. 드롭다운 클릭 시 TabButton변경 구현

![ezgif com-gif-maker (5)](https://user-images.githubusercontent.com/67543454/151036333-efba5d3b-b0ed-4711-aae4-e11695bf5933.gif)

    
3. TabButton 클릭 시 표시 변경(환율, 날짜) 구현

![환율계산기3](https://user-images.githubusercontent.com/67543454/151036286-dba2bbc8-ec12-4150-9daa-9044351ade16.gif)

