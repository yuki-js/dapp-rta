import WalletConnectProvider from "@walletconnect/web3-provider";
import {
  BigNumber,
  Contract,
  ContractFactory,
  providers,
  Signer,
} from "ethers";
import { abi, bytecode } from "./constants";
let provider: providers.JsonRpcProvider | undefined;
let signer: Signer | undefined;
export async function prepareMetaMask() {
  try {
    await (window as any).ethereum.enable();
    provider = new providers.Web3Provider((window as any).ethereum);
    signer = provider.getSigner();
  } catch (e) {}
}
export async function prepareWalletConnect() {
  try {
    const wcProvider = new WalletConnectProvider({
      infuraId: "abdb189e142f40b7b2d0279369923366",
    });
    await wcProvider.enable();
    provider = new providers.Web3Provider(wcProvider);
    signer = provider.getSigner();
  } catch (e) {}
}
export async function prepareRPC() {
  try {
    provider = new providers.JsonRpcProvider("http://localhost:8545");
    signer = provider.getSigner();
  } catch (e) {}
}
export async function deployPollContract(title: string, deadline: number) {
  const factory = new ContractFactory(abi, bytecode, signer);
  const contract = await factory.deploy(title, deadline);
  return contract;
}
export function getContractObject(txid: string) {
  return new Contract(txid, abi, provider);
}
export async function getPollTitle(txid: string) {
  const contract = getContractObject(txid);
  return await contract.title();
}
export async function vote(txid: string, ballot: number) {
  debugger;
  const contract = getContractObject(txid).connect(signer!!);
  const ballotBN = BigNumber.from(ballot);
  const tx = await contract.vote(ballotBN);
  return tx;
}
