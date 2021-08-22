## redux fundamentals

- redux로 Todo App 만들기 예제소스

## 파일 설명

- 경로 (root)/src/

```
├── public
    ├── index.html
├── components
│   ├── TodoInsert.js
│   ├── TodoList.js
│   ├── TodoListItem.js
│   └── TodoTemplate.js
├── redux
│   ├── index.js => todos 모듈(ducks 패턴 사용)
│   ├── todos.js
├── App.css
├── App.js
├── index.css
├── index.js
```

## How to Todo App

## UI 구성하기

- 관계:
  - todoTemplate
    - TodoInsert
    - TodoList
      - TodoListItem

## 기능(이름)

- 리스트 뷰 기능 구현
- 항목 추가 기능 구현(onInsert)
- 지우기 기능 구현(onDelete)
- 체크박스 토글 기능 구현(onToggle)

## 사용 키워드 및 함수

- redux, react-dux
- useDispatch
- useSelector

> 자세한 설명은 포스팅을 참고(url 참조예정)

## ref)

- [리액트 공식 홈페이지](https://reactjs.org/)
- [리액트를 다루는 기술](http://www.yes24.com/Product/Goods/78233628)
- [벨로퍼트와 함께하는 모던 리액트](https://react.vlpt.us/)
