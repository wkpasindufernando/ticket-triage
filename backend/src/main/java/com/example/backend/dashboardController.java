package com.example.backend;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class dashboardController {

    @RequestMapping("/")
    public String index(){
        return "{'sds':'sdsf'}";
    }

}
