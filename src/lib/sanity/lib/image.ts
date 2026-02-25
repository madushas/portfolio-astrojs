import { createImageUrlBuilder } from "@sanity/image-url";

import { dataset, isSanityConfigured, projectId } from "../env";

const imageBuilder = createImageUrlBuilder({
	projectId: projectId || "",
	dataset: dataset || "",
});

export const urlForImage = (source: any) => {
	if (!isSanityConfigured() || !source) {
		return "";
	}
	return imageBuilder?.image(source).auto("format").fit("max").url();
};
