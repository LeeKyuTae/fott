package com.fott.use_mybatis;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.sql.Connection;

@Slf4j
@Component
public class TestRunner implements ApplicationRunner {

    private final DataSource dataSource;

    public TestRunner(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        Connection connection = dataSource.getConnection();
        log.info("Url: " + connection.getMetaData().getURL());
        log.info("UserName: " + connection.getMetaData().getUserName());
    }
}
