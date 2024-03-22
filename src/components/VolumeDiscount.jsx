import { Button, Card, Divider, Text } from "@shopify/polaris";
import { PlusCircleIcon } from "@shopify/polaris-icons";
import Option from "./Option";
import { useFieldArray } from "react-hook-form";
import React from "react";

const VolumeDiscount = ({ control, errors, watch }) => {
	const { fields, append, remove } = useFieldArray({
		name: "volumeDiscount",
		control,
	});
	return (
		<Card padding='0' roundedAbove='sm'>
			<div style={{ padding: "20px" }}>
				<Text variant='headingMd' as='h5'>
					Volume discount rule
				</Text>
			</div>

			<Divider borderWidth='100' />
			<div style={{ overflowY: "auto", maxHeight: "400px" }}>
				{fields.map((item, index) => (
					<React.Fragment key={item.id}>
						<Option
							errors={errors}
							control={control}
							remove={remove}
							index={index}
							watch={watch}
						/>
					</React.Fragment>
				))}
			</div>

			<div style={{ padding: "15px" }}>
				<Button
					variant='primary'
					tone='critical'
					icon={PlusCircleIcon}
					fullWidth
					onClick={() =>
						append([
							{
								quantity: fields.length,
								discountType: "none",
							},
						])
					}
				>
					Add option
				</Button>
			</div>
		</Card>
	);
};

export default VolumeDiscount;
