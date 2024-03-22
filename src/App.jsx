import { BlockStack, Form, InlineGrid, Page } from "@shopify/polaris";
import Preview from "./components/Preview";
import VolumeDiscount from "./components/VolumeDiscount";
import { useForm } from "react-hook-form";
import General from "./components/General";

const App = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm({
		defaultValues: {
			volumeDiscount: [
				{
					quantity: 0,
					discountType: "none",
				},
			],
		},
	});

	const onSubmit = (data) => {
		// Call API
		console.log(data);
	};

	return (
		<Page
			backAction={{ content: "Products", url: "#" }}
			title='Create volume discount'
		>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<InlineGrid columns={{ xs: 1, md: "1.5fr 1.1fr" }} gap='400'>
					<BlockStack gap='400'>
						<General control={control} errors={errors} />
						<VolumeDiscount control={control} errors={errors} watch={watch} />
					</BlockStack>
					<BlockStack gap={{ xs: "400", md: "200" }}>
						<Preview watch={watch} />
					</BlockStack>
				</InlineGrid>
			</Form>
		</Page>
	);
};

export default App;
