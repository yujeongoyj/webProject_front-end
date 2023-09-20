- 프로젝트 npm 버전이 최신버전이 아니어서 npm깔면서 다운그레이드 시켜줘야함 ㅜㅜ

1. npm install connected-react-router@latest
2. npm install --legacy-peer-deps 또는 npm install --force
3. 보안 취약성 검사하라는 안내가 나오면
    3-1. npm audit fix --force (모든 문제 해결하기) %단 주의가 필요 
    3-2. npm audit fix (보안 문제 해결하기)