# React Vite Cache

SPA 리액트 프로젝트를 배포 및 `Cache-Control` 헤더를 이용하여 직접 캐싱 전략을 구성하고 확인해보는 프로젝트

## Cache-Control 헤더

```
/index.html
  Cache-Control: max-age=0, s-maxage=31536000

/assets/*
  Cache-Control: public, max-age=31536000, immutable
```

#### index.html

- 브라우저에서는 매번 재검증
- 중간 서버(CDN)에서는 무기한 캐싱 + 새로 배포시 무효화

#### 정적 자원

- 정적 자원들에 대해서는 무기한 캐싱
- 빌드된 파일의 이름이 고유하게 변경 되기 때문에 무기한으로 설정

<br>

## 배포 방법

#### 1. **버킷 스토리지 설정**

- Cloudflare R2에 빌드 파일 올려 public으로 접근 가능하게 설정
- AWS API를 통해 Cache-Control 헤더 설정
- [Github Action](./.github/workflows/deploy-r2.yml)을 통해 자동화

#### 2. **도메인 설정 및 연결**

- 도메인 추가 및 DNS 레코드 추가 (서브 도메인)
- 도메인 등록 기관에서 네임서버 변경
- R2에서 커스텀 도메인 설정

#### 3. Rewrite Rules 설정

- `/assets/*` → `http.request.uri.path`
- `/*` → `/index.html`

<br>

## 버전 로그

### v0.1.0

- Cache-Control 설정
- Cloudflare R2 배포 설정

### v0.1.1

- 커스텀 도메인 설정
- Cache-Control action 추가
