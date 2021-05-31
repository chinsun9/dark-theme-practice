# dark theme practice

- 다크 테마를 사용하는 사용자에게 자동으로 다크 테마 적용시켜보기

## 시스템 테마 읽기

```css style.css
:root {
  --top-bar: #dddddd;
  --activity-bar: #2c2c2c;
  --side-bar: #61616130;
  --editor: #ffffff;
  --editor-content: #000000;
  --status-bar: #007acc;
}

@media (prefers-color-scheme: dark) {
  :root {
    --top-bar: #3c3c3c;
    --activity-bar: #333333;
    --side-bar: #252526;
    --editor: #1e1e1e;
    --editor-content: #ffffff;
    --status-bar: #007acc;
  }
}
```

- `@media (prefers-color-scheme: dark)` 미디어 쿼리로 시스템 테마를 읽을 수 있다

## 웹페이지 내부에 theme toggle 버튼 만들기

- body에 `dark` 클래스 유무에 따라 토글 하도록 만듦
- `style.css`에서 기존 미디어 쿼리는 지워주고
- 그 역할을 `index.js`에서 `window.matchMedia("(prefers-color-scheme: dark)")`를 통해 수행

## chrome에서 시스템 테마 쉽게 토글하기

- f12 개발자 도구에서 esc key 눌러서 하단 console 창을 뛰움
- three dot (more tools) 눌러서 `Rendering` 탭 오픈
- 스크롤 중간 Emulate CSS media feature prefer-color-scheme 에서 테마 선택

## localStorage에 theme 상태 저장

- 최초 접속, 테마 토글 마다 localStorage 갱신
- 새로고침 혹은 다음 접속에도 특정 테마 유지
