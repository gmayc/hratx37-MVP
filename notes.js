var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
url += '?' + $.param({
  'api-key': "f4312a9d1735437b8f87a1561749c6c8"
});


home
opinion
world
national
politics
technology
science
health
sports
arts
books
movies


CREATE TABLE `Story` (
	`storyId` INT NOT NULL AUTO_INCREMENT,
	`section` VARCHAR(255) NOT NULL,
	`title` VARCHAR(255) NOT NULL,
	`abstract` TEXT NOT NULL,
	`url` VARCHAR(255) NOT NULL,
	`published` VARCHAR(255) NOT NULL,
	`mediaUrl` VARCHAR(255) NOT NULL,
	`mediaCaption` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`storyId`)
);

CREATE TABLE `Author` (
	`authorId` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`authorId`)
);

CREATE TABLE `Section` (
	`author_id` INT NOT NULL,
	`story_id` INT NOT NULL
);

ALTER TABLE `Section` ADD CONSTRAINT `Section_fk0` FOREIGN KEY (`author_id`) REFERENCES `Author`(`authorId`);

ALTER TABLE `Section` ADD CONSTRAINT `Section_fk1` FOREIGN KEY (`story_id`) REFERENCES `Story`(`storyId`);
