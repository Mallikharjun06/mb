package tests;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="./src/test/resources/Features",
		glue="stepDefinitions",
		dryRun=false,
		monochrome=true,
		plugin= {"pretty","html:test-output"}
		)
public class TestRunner {

}