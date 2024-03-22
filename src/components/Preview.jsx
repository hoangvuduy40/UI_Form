import { BlockStack, Button, Card, DataTable, Text } from "@shopify/polaris";
import React, { startTransition, useEffect, useMemo, useState } from "react";

const Preview = ({ watch }) => {
	const [data, setData] = useState([]);

	const title = watch("title");
	const description = watch("description");
	const volumeDiscount = watch("volumeDiscount");

	const rows = useMemo(
		() =>
			data.map((item) =>
				Object.values({
					title: item.title,
					discountType: item.discountType,
					quantity: item.quantity,
					amount: item?.amount,
				}),
			),
		[data],
	);

	useEffect(() => {
		startTransition(() => {
			setData(volumeDiscount);
		});
	}, [volumeDiscount]);

	return (
		<Card roundedAbove='sm'>
			<BlockStack gap='500'>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Text variant='headingMd' as='h5'>
						Preview
					</Text>
					<Button variant='primary' tone='success' submit>
						Submit
					</Button>
				</div>

				<Text alignment='center' variant='headingSm' as='h6'>
					{title}
				</Text>
				<Text fontWeight='medium'>{description}</Text>
				<DataTable
					columnContentTypes={["numeric", "numeric", "numeric", "numeric"]}
					headings={["Title", "Discount Type", "Quantity", "Amount"]}
					rows={rows}
					defaultSortDirection='descending'
					initialSortColumnIndex={4}
				/>
			</BlockStack>
		</Card>
	);
};

export default Preview;
