import styled from "@emotion/styled";

import { PositionProps } from "styled-system";
import Position from "../Position";

export type FixedProps = PositionProps;

const Fixed = styled(Position)<PositionProps>({ position: "fixed" });

export default Fixed;
