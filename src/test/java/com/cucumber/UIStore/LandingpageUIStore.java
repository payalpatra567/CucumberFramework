package com.cucumber.UIStore;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class LandingpageUIStore {
	public By Pop_up = By.xpath("//a[@data-gaaction=\"popup.auth.close\"]");
	public By login = By.cssSelector("#header > div.header__topBar > div > section.header__topBar_sectionRight > ul > li.header__topBarIconList_profile-icon > span > svg");
	public By selectLogin = By.cssSelector("#header > div.header__topBar > div > section.header__topBar_sectionRight > ul > li.header__topBarIconList_profile-icon > span > ul > li:nth-child(1) > a");
	public By  Footerdriver = By.id("footer-links");
	public By  columndriver = By.xpath("//*[@id=\"footer-links\"]/div[1]/div[1]");
	public By Adv = By.xpath("//*[@id=\"homepage_slider\"]/ul/div/div/li/a/img");
}
