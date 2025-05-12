# React Vite Cache

SPA 리액트 프로젝트를 배포 및 `Cache-Control` 헤더를 이용하여 직접 캐싱 전략을 구성하고 확인해보는 프로젝트

## Cache-Control 헤더

```
/
  Cache-Control: max-age=0, s-maxage=31536000

/assets/*
  Cache-Control: public, max-age=31536000, immutable
```

### index.html

- 브라우저에서는 매번 재검증
- 중간 서버(CDN)에서는 무기한 캐싱 + 새로 배포시 무효화

### 정적 자원

- 정적 자원들에 대해서는 무기한 캐싱
- 빌드된 파일의 이름이 고유하게 변경 되기 때문에 무기한으로 설정
