/*
   - 데이터(data) : 화면에 보이거나, 사용자가 입력하거나, 저장해야 하는 정보
   - 데이터베이스(database) : 데이터를 저장하고 필요할 떄 꺼내 쓰는 공간
   - DBMS(database management system) : 데이터베이스를 만들고, 저장하고, 수정하고, 조회할 수 있게 하는 프로그램
      데이터베이스를 관리하는 프로그램
   - RDBMS(realtional database management system): 관계형 데이터베이스 관리 시스템
      예) MySQL, Oracle, PostgreSQL
   - SQL (Structured Query Language)
       : 관계형 데이터베이스에서 데이터를 조회하거나 조작하기 위한 표준 언어
   - SQL 종류
      - DDL (Data Definition Language) : 데이터 정의어
         - DBdml 구조를 정의하거나 변경, 삭제하기 위한 언어
         - CREATE : 생성, ALTER : 수정, DROP : 삭제
      - DML(Data Manipulation Language) : 데이터 조작어
         - SELECT : 조회, INSERT : 추가, UPDATE : 수정, DELETE : 삭제 -> CRUD    
      - DCL (Data Control Language) : 데이터 제어어
         - DB의 보안, 권한 관리, 무결성 제어를 위한 언어
         - GRANT : 권한 부여, REVOKE : 권환 회수
      - TCL(Transaction Control Language) : 트래잭션 제어어
         - 트랜잭션 처리 및 제어를 위한 언어
         - COMMIT : 실행, ROLLBACK : 취소, SAVEPOINT : 임시저장
   - 엔티티(Entity) : 같은 성격을 가진 데이터를 묶어놓는 큰 주제
*/
/*
   DDL(Data Definition Language) : 데이터 정의어
   - 실제 데이터 값이 아닌 구조 자체를 정의하는 언어
   - 객체를 만들고(CREATE), 변경하고(ALTER), 삭제(DROP) 하는 언어

   MYSQL에서 객체 : 스키마(Schema), 테이블(Table),
                   뷰(View), 인덱스(Index),
                   프로시저(Procedure), 트리거(Trigger), 함수(Function)
*/
-- 스키마 생성
CREATE DATABASE sample;
CREATE SCHEMA cocktail;
