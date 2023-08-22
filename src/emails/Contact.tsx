import { Html, Button, Tailwind, Body, Head, Text, Section, Container, Heading, Column, Row, Preview } from '@react-email/components'

export default function ContactEmail({ name, email, phone }: { name: string, email: string, phone: string }) {
    return (
        <Html>
            <Head />
            <Preview>New Form Submission</Preview>
            <Tailwind>
                <Body className='bg-[#020817] my-auto mx-auto font-sans'>
                    <Container className='bg-[#020817] shadow border border-solid border-[#9c9c9c] rounded my-[40px] mx-auto p-[20px] w-[465px]'>
                        <Heading className='text-white text-[36px] text-center p-0 my-[30px] mx-0'>Regiment</Heading>
                        <Heading className='text-[#3B82F6] text-[24px] font-normal text-center p-0 my-[30px] mx-0'>
                            New Submission: <strong>Contact Form</strong>
                        </Heading>

                        <Section className=''>
                            <Row>
                                <Column align='left'>
                                    <Heading className='text-white text-[20px]'>Name: </Heading>
                                </Column>
                                <Column align='right'>
                                    <Text className='text-white text-[20px]'>{name}</Text>
                                </Column>
                            </Row>
                            
                            <Row>
                                <Column align='left'>
                                    <Heading className='text-white text-[20px]'>Email: </Heading>
                                </Column>
                                <Column align='right'>
                                    <Text className='text-white text-[20px]'>{email}</Text>
                                </Column>
                            </Row>
                            
                            <Row>
                                <Column>
                                    <Heading className='text-white text-[20px]'>Phone Number: </Heading>
                                </Column>
                                <Column align='right'>
                                    <Text className='text-white text-[20px]'>{phone}</Text>
                                </Column>
                            </Row>
                        </Section>

                        <Section className='text-center mt-[20px] mb-[20px]'>
                            <Button
                                pX={20}
                                pY={12}
                                className='bg-[#3B82F6] rounded text-white text-[12px] font-semibold no-underline text-center'
                            >
                                See all submissions
                            </Button>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}