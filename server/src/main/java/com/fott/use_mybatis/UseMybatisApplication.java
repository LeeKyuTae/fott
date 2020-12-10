package com.fott.use_mybatis;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan(basePackageClasses = UseMybatisApplication.class)
@SpringBootApplication
public class UseMybatisApplication {

    public static void main(String[] args) {
        SpringApplication.run(UseMybatisApplication.class, args);
    }

}
