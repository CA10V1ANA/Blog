PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_posts` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`title` text NOT NULL,
	`author` text NOT NULL,
	`excerpt` text NOT NULL,
	`content` text NOT NULL,
	`cover_image_url` text NOT NULL,
	`published` integer NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_posts`("id", "slug", "title", "author", "excerpt", "content", "cover_image_url", "published", "created_at", "updated_at") SELECT "id", "slug", "title", "author", "excerpt", "content", "cover_image_url", "published", "created_at", "updated_at" FROM `posts`;--> statement-breakpoint
DROP TABLE `posts`;--> statement-breakpoint
ALTER TABLE `__new_posts` RENAME TO `posts`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE UNIQUE INDEX `posts_slug_unique` ON `posts` (`slug`);