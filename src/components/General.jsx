import {
	BlockStack,
	Card,
	FormLayout,
	Text,
	TextField,
} from "@shopify/polaris";
import { Controller } from "react-hook-form";
import { TextInput } from "./TextInput";

const General = ({ control, errors }) => {
	return (
		<Card roundedAbove='sm'>
			<BlockStack gap='500'>
				<Text variant='headingMd' as='h5'>
					General
				</Text>

				<FormLayout>
					<TextInput
						control={control}
						label='Campaign'
						placeholder='Campaign'
						name='campaign'
						required='Campaign name không được bỏ trống'
						errors={errors}
					/>
					<TextInput
						control={control}
						label='Title'
						placeholder='Title'
						name='title'
					/>
					<TextInput
						control={control}
						label='Description'
						placeholder='Description'
						name='description'
					/>
				</FormLayout>
			</BlockStack>
		</Card>
	);
};

export default General;
