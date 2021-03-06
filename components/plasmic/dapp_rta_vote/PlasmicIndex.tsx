// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7CKZhD2BVpe8oYNyjz4EUo
// Component: TR24vsJktu
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web";
import BigIconButton from "../../BigIconButton"; // plasmic-import: tl3mxo0fWy/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_dapp_rta_vote.module.css"; // plasmic-import: 7CKZhD2BVpe8oYNyjz4EUo/projectcss
import * as sty from "./PlasmicIndex.module.css"; // plasmic-import: TR24vsJktu/css

export type PlasmicIndex__VariantMembers = {};

export type PlasmicIndex__VariantsArgs = {};
type VariantPropType = keyof PlasmicIndex__VariantsArgs;
export const PlasmicIndex__VariantProps = new Array<VariantPropType>();

export type PlasmicIndex__ArgsType = {};
type ArgPropType = keyof PlasmicIndex__ArgsType;
export const PlasmicIndex__ArgProps = new Array<ArgPropType>();

export type PlasmicIndex__OverridesType = {
  root?: p.Flex<"div">;
  connWc?: p.Flex<typeof BigIconButton>;
  connMm?: p.Flex<typeof BigIconButton>;
  connRpc?: p.Flex<typeof BigIconButton>;
};

export interface DefaultIndexProps {
  dataFetches: PlasmicIndex__Fetches;
}

function PlasmicIndex__RenderFunc(props: {
  variants: PlasmicIndex__VariantsArgs;
  args: PlasmicIndex__ArgsType;
  overrides: PlasmicIndex__OverridesType;
  dataFetches?: PlasmicIndex__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <React.Fragment>
      <Head>
        <title key="title">{""}</title>
        <meta key="og:title" property="og:title" content={""} />
        <meta
          key="description"
          name="description"
          property="og:description"
          content={""}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <div className={classNames(defaultcss.all, sty.box__gQ2D)}>
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__p90Eg
              )}
            >
              {"Welcome"}
            </div>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__oqLrt
              )}
            >
              {"Choose your wallet type"}
            </div>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__neHuf)}
            >
              <BigIconButton
                data-plasmic-name={"connWc"}
                data-plasmic-override={overrides.connWc}
                className={classNames("__wab_instance", sty.connWc)}
                slot={"WalletConnect"}
              >
                <img
                  alt={""}
                  className={classNames(defaultcss.img, sty.img__cfrt1)}
                  role={"img"}
                  src={
                    "https://walletconnect.org/walletconnect-logo.svg" as const
                  }
                />
              </BigIconButton>

              <BigIconButton
                data-plasmic-name={"connMm"}
                data-plasmic-override={overrides.connMm}
                className={classNames("__wab_instance", sty.connMm)}
                slot={"MetaMask"}
              >
                <img
                  alt={""}
                  className={classNames(defaultcss.img, sty.img__oRoXk)}
                  role={"img"}
                  src={
                    "https://github.com/MetaMask/brand-resources/raw/master/SVG/metamask-fox.svg" as const
                  }
                />
              </BigIconButton>

              <BigIconButton
                data-plasmic-name={"connRpc"}
                data-plasmic-override={overrides.connRpc}
                className={classNames("__wab_instance", sty.connRpc)}
                slot={"JSON-RPC"}
              >
                <div className={classNames(defaultcss.all, sty.box__gqkUb)}>
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__qkpAr
                    )}
                  >
                    {"localhost:8545"}
                  </div>
                </div>
              </BigIconButton>
            </p.Stack>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "connWc", "connMm", "connRpc"],
  connWc: ["connWc"],
  connMm: ["connMm"],
  connRpc: ["connRpc"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  connWc: typeof BigIconButton;
  connMm: typeof BigIconButton;
  connRpc: typeof BigIconButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicIndex__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicIndex__VariantsArgs;
    args?: PlasmicIndex__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicIndex__Fetches;
  } & Omit<PlasmicIndex__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicIndex__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicIndex__ArgProps,
      internalVariantPropNames: PlasmicIndex__VariantProps,
    });

    const { dataFetches } = props;

    return PlasmicIndex__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicIndex";
  } else {
    func.displayName = `PlasmicIndex.${nodeName}`;
  }
  return func;
}

export const PlasmicIndex = Object.assign(
  // Top-level PlasmicIndex renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    connWc: makeNodeComponent("connWc"),
    connMm: makeNodeComponent("connMm"),
    connRpc: makeNodeComponent("connRpc"),

    // Metadata about props expected for PlasmicIndex
    internalVariantProps: PlasmicIndex__VariantProps,
    internalArgProps: PlasmicIndex__ArgProps,
  }
);

export default PlasmicIndex;
/* prettier-ignore-end */
