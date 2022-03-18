<!--
order: 1
-->

# Chain ID

Learn about the Majestic StarChain chain-id format {synopsis}

## Official Chain IDs

:::: tabs
::: tab Testnet

| Name                         | Chain ID                                            | Identifier | EIP155 Number                                 | Version Number                                      |
|------------------------------|-----------------------------------------------------|------------|-----------------------------------------------|-----------------------------------------------------|
| Majestic StarChain Testnet   | `mjt_{{ $themeConfig.project.testnet_chain_id }}-2` | `mjt`      | `{{ $themeConfig.project.testnet_chain_id }}` | `{{ $themeConfig.project.testnet_version_number }}` |

:::
::: tab Mainnet

| Name                | Chain ID                                    | Identifier | EIP155 Number                         | Version Number                            |
|---------------------|---------------------------------------------|------------|---------------------------------------|-------------------------------------------|
| Majestic StarChain  | `mjt_{{ $themeConfig.project.chain_id }}-1` | `mjt`      | `{{ $themeConfig.project.chain_id }}` | {{ $themeConfig.project.version_number }} |
:::
::::

## The Chain Identifier

Every chain must have a unique identifier or `chain-id`. Tendermint requires each application to
define its own `chain-id` in the [genesis.json fields](https://docs.tendermint.com/master/spec/core/genesis.html#genesis-fields). However, in order to comply with both EIP155 and Cosmos standard for chain upgrades, Majestic StarChain-compatible chains must implement a special structure for their chain identifiers.

## Structure

The Majestic StarChain Chain ID contains 3 main components

- **Identifier**: Unstructured string that defines the name of the application.
- **EIP155 Number**: Immutable [EIP155](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-155.md) `CHAIN_ID` that defines the replay attack protection number.
- **Version Number**: Is the version number (always positive) that the chain is currently running.
This number **MUST** be incremented every time the chain is upgraded or forked in order to avoid network or consensus errors.

### Format

The format for specifying and Majestic StarChain compatible chain-id in genesis is the following:

```bash
{identifier}_{EIP155}-{version}
```
