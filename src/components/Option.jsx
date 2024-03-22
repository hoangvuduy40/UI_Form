import {
	BlockStack,
	Box,
	Button,
	Divider,
	FormLayout,
	Select,
	Text,
} from "@shopify/polaris";
import { DeleteIcon } from "@shopify/polaris-icons";
import { Controller } from "react-hook-form";
import { TextInput } from "./TextInput";

const options = [
	{ label: "None", value: "none" },
	{ label: "% discount", value: "discount" },
];

const Option = ({ remove, control, index, errors, watch }) => {
	const volumeDiscount = watch("volumeDiscount");

	return (
		<>
			<div style={{ minHeight: "210px" }}>
				<Box
					background='bg-fill-warning-active'
					width='fit-content'
					padding='200'
					borderEndEndRadius='300'
				>
					<Text tone='text-inverse' variant='headingXs' as='h6'>
						{`OPTION ${index + 1}`}
					</Text>
				</Box>
				<div style={{ textAlign: "right", marginRight: "20px" }}>
					<Button
						size='large'
						variant='tertiary'
						icon={DeleteIcon}
						accessibilityLabel='Delete option'
						onClick={() => remove(index)}
					/>
				</div>
				<FormLayout>
					<div style={{ padding: "25px", paddingTop: "5px" }}>
						<BlockStack gap='300'>
							<FormLayout.Group condensed>
								<TextInput
									control={control}
									label='Title'
									placeholder='Title'
									name={`volumeDiscount.${index}.title`}
								/>

								<TextInput
									control={control}
									label='Subtitle'
									placeholder='Subtitle'
									name={`volumeDiscount.${index}.subtitle`}
								/>

								<TextInput
									control={control}
									label='Label(optinal)'
									placeholder='Label'
									name={`volumeDiscount.${index}.label`}
								/>
							</FormLayout.Group>
							<FormLayout.Group condensed>
								<div>
									<TextInput
										control={control}
										label='Quantity'
										placeholder='Quantity'
										name={`volumeDiscount.${index}.quantity`}
										type='number'
										errors={errors}
										required='Quantity không được bỏ trống'
										isArray={true}
									/>
									{Object.getOwnPropertyNames(errors).length !== 0 &&
										errors?.volumeDiscount &&
										errors?.volumeDiscount[index]?.quantity && (
											<Text tone='critical'>
												{errors?.volumeDiscount[index]?.quantity.message}
											</Text>
										)}
								</div>

								<Controller
									control={control}
									name={`volumeDiscount.${index}.discountType`}
									render={({ field: { onChange, onBlur, value, ref } }) => (
										<Select
											options={options}
											label='Discount type'
											onBlur={onBlur}
											onChange={onChange}
											value={value}
											ref={ref}
										/>
									)}
								/>
								{volumeDiscount[index].discountType === "discount" ? (
									<div>
										<TextInput
											control={control}
											label='Amount'
											placeholder='amount'
											name={`volumeDiscount.${index}.amount`}
											type='number'
											required='Amount không được bỏ trống'
											errors={errors}
											isArray={true}
										/>
										{Object.getOwnPropertyNames(errors).length !== 0 &&
											errors?.volumeDiscount &&
											errors?.volumeDiscount[index]?.amount && (
												<Text tone='critical'>
													{errors?.volumeDiscount[index]?.amount.message}
												</Text>
											)}
									</div>
								) : (
									<></>
								)}
							</FormLayout.Group>
						</BlockStack>
					</div>
				</FormLayout>
			</div>
			<Divider borderWidth='050' />
		</>
	);
};

export default Option;
