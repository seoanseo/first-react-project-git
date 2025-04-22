// Import the pre-built module fields
import {
    RepeatedFieldGroup,
    ModuleFields,
    ImageField,
    TextField,
    Font,
    } from "@hubspot/cms-components/fields";

    export const fields = (
        <ModuleFields>
        <RepeatedFieldGroup
        name="team_members"
        label="Team Members"
        occurrence={{
        min: 1,
        max: 500,
        default: 3,
        }}
        default={[
        {
        team_member_photo: {
        src: "https://picsum.photos/150", alt: "Jane Doe 1"
        },
        team_member_name: "Jane Doe 1"
        },
        {
        team_member_photo: {
        src: "https://picsum.photos/150", alt: "John Doe 2"
        },
        team_member_name: "John Doe 2"
        },
        {
        team_member_photo: {
        src: "https://picsum.photos/150", alt: "Jack Doe 3"
        },
        team_member_name: "Jack Doe 3"
        },
        ]}
        >
        <Font
        label="Font"/>
        <ImageField
        label="Team Member Photo"
        name="team_member_photo"
        default={{
        src: "https://picsum.photos/150"
        }}
        required
        />
        <TextField
        label="Team Member Name"
        name="team_member_name"
        default="Jane Doe"
        required
        />
        </RepeatedFieldGroup>
        </ModuleFields>
        );