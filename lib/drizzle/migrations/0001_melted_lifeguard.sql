ALTER TABLE `location_log_image` ADD `user_id` integer NOT NULL REFERENCES user(id);--> statement-breakpoint
ALTER TABLE `location_log` ADD `user_id` integer NOT NULL REFERENCES user(id);--> statement-breakpoint
ALTER TABLE `location` ADD `user_id` integer NOT NULL REFERENCES user(id);